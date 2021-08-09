import { userDetail } from './importer.js'


 function nameLogger(name) {
   console.log('UserDetail', userDetail())
  console.log('Name:', name)
}

 function roleLogger(role) {
  console.log('Role:', role)
}

function cityLogger(city) {
  console.log('City', city)
}

export const API_URL = 'https://example.com'

export {nameLogger, roleLogger}

export default cityLogger