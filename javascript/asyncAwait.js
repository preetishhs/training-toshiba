async function fetchArticlesAsync() {
  try {
    let users = await fetch('https://jsonplaceholder.typicode.com/users')
    let usersJson = await users.json()
    let user1 = usersJson[0].id
    let posts = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${user1}`,
    )
    let postsJson = await posts.json()
    return postsJson
  } catch (err) {
    return err
  }
}

// let res = fetchArticlesAsync()
// console.log(res)
async function getArticles() {
  let result = await 'test'
  return result
}

console.log(
  getArticles().then((res) => {
    console.log(res)
  }),
)
