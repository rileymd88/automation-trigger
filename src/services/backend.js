//const baseUrl = window.location.href.split('qlikcloud.com')[0] + 'qlikcloud.com'
//const appId = window.location.href.split('qlikcloud.com/sense/app/')[1].split('/')[0]
//const sheetId = window.location.href.split('qlikcloud.com/sense/app/')[1].split('/')[2]
const baseUrl = '..'

function get(endpoint) {
  return new Promise(async function (resolve, reject) {
    try {
      const headers = {
        'Content-Type': 'application/json'
      }
      const options = {
        method: 'GET',
        headers: headers
      }
      const url = `${baseUrl}/api/v1/${endpoint}`
      const response = await fetch(url, options)
      if (response.status === 200) {
        resolve(await response.json())
      }
      else {
        reject(response.status)
      }
    }
    catch (err) {
      reject(err)
      console.error(err)
    }
  })
}

function post(endpoint, executionToken, body) {
  return new Promise(async function (resolve, reject) {
    try {
      const headers = {
        'X-Execution-Token': executionToken,
        'Content-Type': 'application/json'
      }
      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }
      const response = await fetch(`${baseUrl}/api/v1/${endpoint}`, options)
      let data

      if (response.status === 200) {
        const data = await response.json()
        if (data.status === 'queued') {
          resolve({ ok: true, msg: 'queued', code: 200 })
        }
        else {
          resolve({ ok: true, msg: data, code: 200 })
        }
      }
      if (response.status === 500) {
        const data = await response.json()
        const msg = data[0].response.body.errors.map(e => e.detail).join(' | ')
        resolve({ ok: false, msg: msg, code: 500 })
      }
      if (response.status === 404) {
        const data = await response.json()
        const msg = data.errors.map(e => e.detail).join(' | ')
        resolve({ ok: false, msg: msg, code: 404 })
      }
    }
    catch (err) {
      reject(err)
      console.error(err)
    }
  })
}

export const getBaseUrl = () => {
  return baseUrl
}

export const getAppId = async (app) => {
  return new Promise(async (resolve) => {
    const appId = await app.evaluateEx('DocumentName()')
    resolve(appId.qText)
  })
}

function getSheetIdFromUrl() {
  if (typeof window === 'undefined' || !window.location) {
    return ''
  }

  const { href, search, hash } = window.location
  const sheetQueryId = new URLSearchParams(search).get('sheet')

  if (sheetQueryId) {
    return sheetQueryId
  }

  const sources = [href, hash]

  for (const source of sources) {
    if (!source) {
      continue
    }

    const match = source.match(/\/sheet\/([^/?#]+)/)

    if (match && match[1]) {
      return decodeURIComponent(match[1])
    }
  }

  return ''
}

export const getSheetId = async (model) => {
  const sheetIdFromUrl = getSheetIdFromUrl()

  if (sheetIdFromUrl) {
    return sheetIdFromUrl
  }

  let current = model
  let lastParent

  try {
    while (current && typeof current.getParent === 'function') {
      const parent = await current.getParent()

      if (!parent || !parent.id || parent.id === current.id) {
        break
      }

      lastParent = parent
      current = parent
    }
  }
  catch (err) {
    return ''
  }

  return lastParent ? lastParent.id : ''
}



export const getAutomations = async () => {
  const automations = await get('items?resourceType=automation&limit=100')
  return automations.data.map(function (a) {
    return { value: a.resourceId, label: a.name }
  })
}

export const getAutomation = async (automationId) => {
  return await get(`automations/${automationId}`)
}

export const executeAutomation = async (automationId, data, executionToken) => {
  return new Promise(async function (resolve, reject) {
    resolve(await post(`automations/${automationId}/actions/execute`, executionToken, data))
  })
}

function hasUpdatedExecutionToken(currentExecutionToken, nextExecutionToken) {
  if (typeof nextExecutionToken === 'undefined') {
    return false
  }

  return currentExecutionToken !== nextExecutionToken
}

async function patchObject(model, qPatches) {
  if (!model || typeof model.applyPatches !== 'function') {
    return
  }

  await model.applyPatches(qPatches, false)
}

export const applyExecutionToken = async (model, automationId, currentExecutionToken) => {
  try {
    const automation = await getAutomation(automationId)
    const executionToken = automation.executionToken

    if (!hasUpdatedExecutionToken(currentExecutionToken, executionToken)) {
      return
    }

    await patchObject(model, [{
        qPath: '/blend/executionToken',
        qOp: 'replace',
        qValue: JSON.stringify(executionToken)
      }])
  }
  catch (e) {
    console.info('This user does not have access to modify to selected automation')
  }
}

export const applyExecutionTokenMigration = async (model, automationId, blend) => {
  try {
    const automation = await getAutomation(automationId)
    const executionToken = automation.executionToken

    if (!hasUpdatedExecutionToken(blend.executionToken, executionToken)) {
      return
    }

    await patchObject(model, [{
        qPath: '/blend/executionToken',
        qOp: 'add',
        qValue: JSON.stringify(executionToken)
      }])
  }
  catch (e) {
    console.info('This user does not have access to modify to selected automation')
  }
}

export const createBookmark = (app) => {
  return new Promise(async function (resolve, reject) {
    try {
      const newDate = new Date();
      const props = {
        qProp: {
          qInfo: {
            qId: `automation_${app.id}_${newDate.getTime()}`,
            qType: 'bookmark',
          },
          qMetaDef: {
            title: `Generated automation bookmark on ${newDate.toISOString()}`,
            description: 'Generated to provide target automation with bookmark to get current selection state',
            _createdBy: 'automation-trigger',
            _createdFor: 'automation',
            _createdOn: `${newDate.toISOString()}`,
            _id: `automation_${encodeURIComponent(app.id)}_${newDate.getTime()}`,
          },
        },
      };
      const bookmark = await app.createBookmark(props)
      const layout = await bookmark.getLayout()
      resolve(layout.qInfo.qId)
    }
    catch (err) {
      reject(err)
    }
  })
}

export const createTemporaryBookmark = (app) => {
  return new Promise(async function (resolve, reject) {
    try {
      if (!app || typeof app.createTemporaryBookmark !== 'function') {
        reject(new Error('Temporary bookmarks are not supported by the current app session'))
        return
      }

      const bookmark = await app.createTemporaryBookmark({})
      resolve(bookmark.qId)
    }
    catch (err) {
      reject(err)
    }
  })
}
