const state = {
  name: null,
  username: null,
  token: null
}
const mutations = {
  setActiveUser (state, n) {
    if (n) {
      state.name = n.displayName
      state.username = n.uid
    } else {
      console.log('setting empty user, logout perhaps?')
      state.name = null
    }
  },
  logout (state, n) {
    state.name = null
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
