arr1 = [1,2]
arr2 = [3,4]

arr3 = [...arr1, ...arr2]

console.log(arr3)

obj1 = { a: 2}
obj2 = {...obj1, b: 2}
console.log(obj2)

userList = [
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

obj2 = userList.map(item => {
  return {
   ...item,
    membership: item.membership + 1
  }
})
console.log(obj2)