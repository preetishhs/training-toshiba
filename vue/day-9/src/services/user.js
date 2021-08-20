import { api } from './axiosInstance'

// Fetch all products

export function fetchUser() {
  return api
    .get('/users/1')
    .then((res) => {
      console.log('User', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function updateUser(user) {
  return new Promise((resolve, reject) => {
    return api
      .put('/users/7', JSON.stringify(user))
      .then((res) => {
        console.log('User Update', res)
        return resolve(res.data)
      })
      .catch((err) => {
        console.log(err.response)
        return reject(err)
      })
  })
}
