export default {
  namespaced: true,
  state: {
    user: {},
    isLoggedIn: false
  },
  actions: {
    loginUser: jest.fn(),
    logoutUser: jest.fn()
  }
}
