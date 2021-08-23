import { api } from './axiosInstance'

// Fetch all products

export function fetchProducts() {
  return api
    .get('/products')
    .then((res) => {
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function fetchProductItem(id) {
  return api
    .get(`/products/${id}`)
    .then((res) => {
      console.log('Product Item', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function getCategoryList() {
  return api
    .get('/products/categories')
    .then((res) => {
      console.log('category List', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}

export function getProductInCategory(filter) {
  return api
    .get(`/products/category/${filter.category}`, {
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
  return api
    .delete(`/products/${productId}`)
    .then((res) => {
      console.log('Successfully deleted', res)
      return res.data
    })
    .catch((err) => {
      console.log(err.response)
    })
}
