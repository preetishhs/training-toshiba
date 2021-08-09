import * as helperFunctions from './helper.js'
import cityLoggerFun from './helper.js'

helperFunctions.nameLogger('John')
helperFunctions.roleLogger('Frontend Developer')
cityLoggerFun('Bangalore')

console.log(helperFunctions.API_URL)

export function userDetail() {
  return {
    name: 'Jane',
    age: 20
  }
}