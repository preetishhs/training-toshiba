import axios from 'axios'

// Fetch all products

export function fetchProducts() {
  return axios
    .get('https://fakestoreapi.com/products')
    .then((res) => {
      console.log('Product List', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function fetchProductItem(id) {
  return axios
    .get(`https://fakestoreapi.com/products/${id}`)
    .then((res) => {
      console.log('Product Item', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function getCategoryList() {
  return axios
    .get('https://fakestoreapi.com/products/categories')
    .then((res) => {
      console.log('category List', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function getProductInCategory(filter) {
  return axios
    .get(`https://fakestoreapi.com/products/category/${filter.category}`, {
      params: {
        limit: filter.limit
      }
    })
    .then((res) => {
      console.log('Product in category', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function deleteProduct(productId) {
  return axios
    .delete(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => {
      console.log('Successfully deleted', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}
