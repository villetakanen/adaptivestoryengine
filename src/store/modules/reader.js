// Import mock data for server side books
import bookdata from '../../assets/books.json'
// The actual books reside in a firebase store
import firebase from 'firebase'
import Vue from 'vue'

// bookmark: reference to current book chapter
// title: reference to current book
const state = {
  bookmark: '1',
  title: 'The Escape',
  books: bookdata
}
const mutations = {
  changeToTitle (state, n) {
    if (state.books && state.books.hasOwnProperty(n)) {
      state.title = n
      state.bookmark = state.books[n].start
      // console.log('activated title ' + n)
    } else {
      console.log('tried to activate title ' + n)
    }
  },
  moveToChapter (state, n) {
    if (state.books && state.books[state.title].hasOwnProperty(n)) {
      state.bookmark = n
      // console.log('moved to ' + n)
    } else {
      console.log('tried to move to' + n)
    }
  },
  updateBook (state, n) {
    if (n && n.title && n.start) {
      Vue.set(state.books, n.title, n)
      // const test = JSON.stringify(state.books)
      // console.log(test)
    }
  }
}
const actions = {
  getFBBooks (context) {
    var db = firebase.firestore()
    // var user = firebase.auth().currentUser
    db.collection('books').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.data())
        context.commit('updateBook', doc.data())
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
