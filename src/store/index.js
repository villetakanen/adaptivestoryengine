import Vue from 'vue'
import Vuex from 'vuex'
import reader from './modules/reader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reader
  }
})
