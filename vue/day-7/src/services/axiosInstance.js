import axios from 'axios'

let config = {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    Accept: 'application/json'
  },
  timeout: 40000
}

const api = axios.create(config)

api.interceptors.request.use(
  (response) => {
    //log to logging server
    // console.log('Request Sent succesfully', response)
    return response
  },
  (error) => {
    // console.log('Request sending Error', error)
    return error
  }
)

api.interceptors.response.use(
  (response) => {
    //log to logging server
    // console.log('Response recieved succesfully', response)
    return response
  },
  (error) => {
    // console.log('Response Error', error)
    return error
  }
)

let configZendesk = {
  baseURL: process.env.VUE_APP_ZENDESK_URL,
  headers: {
    Accept: 'application/json'
  },
  timeout: 60000
}

const apiZendesk = axios.create(configZendesk)

export { api, apiZendesk }
