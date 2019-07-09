import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/index'
// import books from './assets/books.json'

Vue.config.productionTip = false

// Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  // books,
  render: h => h(App)
}).$mount('#app')
