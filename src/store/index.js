import Vue from 'vue'
import Vuex from 'vuex'
import reader from './modules/reader'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reader,
    user
  }
})
