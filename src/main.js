import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import store from './store/index'
import router from './router'
// import books from './assets/books.json'
import * as firebase from 'firebase'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  // books,
  render: h => h(App)
}).$mount('#app')

var config = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
}
firebase.initializeApp(config)
