import blendr from './blendr'

function get(endpoint) {
  return new Promise(async function (resolve, reject) {
    try {
      const headers = {
        'X-App-Id': blendr.appId,
        'X-Api-Key': blendr.apiKey
      }
      const options = {
        method: 'GET',
        headers: headers
      }
      const url = `${blendr.baseUrl}/${endpoint.replace('account_externalid', blendr.accountId)}`
      const response = await fetch(url, options)
      if (response.status === 200) {
        resolve(await response.json())
      }
      else {
        reject(response.status)
      }
    }
    catch {
      reject(err)
      console.error(err)
    }
  })
}

function post(endpoint, body) {
  return new Promise(async function (resolve, reject) {
    try {
      const headers = {
        'X-App-Id': blendr.appId,
        'X-Api-Key': blendr.apiKey
      }
      const options = {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(body)
      }
      const url = `${blendr.baseUrl}/${endpoint.replace('account_externalid', blendr.accountId)}`
      const response = await fetch(url, options)
      if (response.status === 200) {
        resolve(await response.json())
      }
      else {
        reject(response.status)
      }
    }
    catch {
      reject(err)
      console.error(err)
    }
  })
}

export const getBlends = async () => {
  const blends = await get('accounts/account_externalid/blends')
  return blends.data.map(function (b) {
    return { value: b.guid, label: b.name }
  })
}

export const executeBlend = (blendId, data) => {
  return new Promise(async function(resolve,reject){
    try {
      await post(`accounts/account_externalid/blends/${blendId}/run`, data)
      resolve('Blend run successfully')
    }
    catch(err) {
      reject(err)
    }
  })
}