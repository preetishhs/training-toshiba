function addNum() {
  let a = 2
  let b = 3
  setTimeout(() => {
    b = 5
  }, 1000)
  console.log('sum =', a + b)
}

addNum()

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('error occured')
  }, 2000)
})

console.log('Promise', p)

p.then((res) => {
  console.log('Promise', res)
})
  .catch((err) => {
    console.log('Error:', err)
  })
  .finally(() => {
    console.log('Successfully called promise')
  })

function addNumWithPromise() {
  let a = 2
  let b = 3
  let p = new Promise((resolve, reject) => {
    setTimeout(() => {
      b = 5
      resolve()
    }, 2000)
  })

  p.then(() => {
    console.log('sum =', a + b)
  })
}

addNumWithPromise()
