const baseUrl = window.location.href.split('qlikcloud.com')[0] + 'qlikcloud.com'
const appId = window.location.href.split('qlikcloud.com/sense/app/')[1].split('/')[0]
const sheetId = window.location.href.split('qlikcloud.com/sense/app/')[1].split('/')[2]

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
        'X-Execution-Token': executionToken
      }
      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }
      const response = await fetch(`${baseUrl}/api/v1/${endpoint}`, options)
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

export const getBaseUrl = () => {
  return baseUrl
}

export const getAppId = () => {
  return appId
}

export const getSheetId = () => {
  return sheetId
}



export const getAutomations = async () => {
  const automations = await get('items?resourceType=automation')
  return automations.data.map(function (a) {
    return { value: a.resourceId, label: a.name }
  })
}

export const getAutomation = async (automationId) => {
  return await get(`automations/${automationId}`)
}

export const executeAutomation = async (automationId, data, executionToken) => {
  return new Promise(async function (resolve, reject) {
    try {
      const response = await post(`automations/${automationId}/actions/execute`, executionToken, data)
      resolve(response)
    }
    catch (err) {
      reject(err)
    }
  })
}

export const applyExecutionToken = async (app, automationId, thisObjectId) => {
  try {
    const automation = await getAutomation(automationId)
    const executionToken = automation.execution_token
    const thisObject = await app.getObject(thisObjectId)
    const patchParams = {
      qSoftPatch: false,
      qPatches: [{
        qPath: '/blend/executionToken',
        qOp: 'replace',
        qValue: JSON.stringify(executionToken)
      }]
    }
    await thisObject.applyPatches(patchParams)
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