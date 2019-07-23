// Import mock data for server side books
import bookdata from '../../assets/books.json'
import firebase from 'firebase'

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
  updateBooks (state, n) {
    if (n && n.title && n.start) {
      state.title = n[0].title
      state.bookmark = n[0].start
      state.books = n
    }
  }
}
const actions = {
  getFBBooks (context) {
    var db = firebase.firestore()
    // var user = firebase.auth().currentUser
    db.collection('books').get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data())
        context.commit('updateBooks', doc.data())
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
