function fetchArticles() {
  return new Promise((resolve, reject) => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((resJson) => {
        let user1 = resJson[0].id
        return fetch(
          `https://jsonplaceholder.typicode.com/posts?userId=${user1}`,
        )
      })
      .then((posts) => posts.json())
      .then((postsJson) => {
        resolve(postsJson)
      })
      .catch((err) => {
        console.log('error')
        return reject(err)
      })
  })
}

fetchArticles()
  .then((result) => {
    console.log('result', result)
  })
  .catch((err) => {
    console.log('error', err)
  })
