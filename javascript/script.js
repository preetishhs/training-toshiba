// const userName = 'John'
// // userName = 'Hello'

// // console.log('username: ', userName)

// const obj1 = {
//   a: 2
// }
// obj1.a = 3
// console.log(obj1)

function add (a,b) {
  let sum = a+b
  return sum
}

const addWithArrowFun = (a,b) => a + b

console.log('Sum', add(2,5))
console.log('Sum', addWithArrowFun(2,5))

