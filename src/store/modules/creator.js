import firebase from 'firebase'
import Vue from 'vue'

const state = {
  books: {}
}
const mutations = {
  addBook (state, n) {
    if (n && n.title && n.start) {
      Vue.set(state.books, n.title, n)
    }
  }
}
const actions = {
  getBooks ({ state, commit }, username) {
    var db = firebase.firestore()
    db.collection('books').where('creator', '==', username).get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        commit('addBook', doc.data())
      })
    })
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations
}
