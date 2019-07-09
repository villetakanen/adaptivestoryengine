// Import mock data for server side books
import bookdata from '../../assets/books.json'

// bookmark: reference to current book chapter
// title: reference to current book
const state = {
  bookmark: null,
  title: null,
  books: bookdata
}

export default {
  namespaced: true,
  state
}
