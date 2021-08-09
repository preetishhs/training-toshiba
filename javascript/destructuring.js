
obj = {
  name: 'John',
  age: 20,
  membership: 2
}

//let currentUserName, age
// ({name: currentUserName, age} = obj)

let {name: currentUserName, age} = obj


console.log(currentUserName, age)

// arr1 = [1,2,3]

// let [a,b] = arr1

// console.log(a,b)