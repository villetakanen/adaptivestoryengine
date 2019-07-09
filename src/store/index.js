import Vue from 'vue'
import Vuex from 'vuex'
import reader from './modules/reader'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    reader
  }
})
