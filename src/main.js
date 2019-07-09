import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/index'
// import bookData from './assets/books.json'

Vue.config.productionTip = false

// Vue.use(Vuex)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
}).$mount('#app')
