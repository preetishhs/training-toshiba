// forEach

arr1 = [1,2,3,4]
arr2 = []
let test = arr1.forEach((item) => {
  console.log(item)
})
console.log(test)

// map
arr2 = arr1.map(item => {
  return item + 1
})
console.log(arr2, arr1)

obj1 = [
  {
    name: 'John',
    age: 20,
    membership: 1
  },
  {
    name: 'Jane',
    age: 30,
    membership: 2
  }
]
obj2 = []

// obj1.forEach(item => {
//   console.log(item.name, item.age)
// })

// obj2 = obj1.map(item => {
//   return {
//     name: item.name,
//     age: item.age,
//     membership: item.membership + 1
//   }
// })
// console.log(obj2)


let filteredList = obj1.filter(item => {
  return item.membership === 2
})

console.log(filteredList)

// includes
newList = ['john', 'jane', 'rock']
console.log('Includes:', newList.includes('asddw'))


