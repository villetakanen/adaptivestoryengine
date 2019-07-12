import Vue from 'vue'
import Router from 'vue-router'
import StoryBoard from './components/StoryBoard'
import LoginForm from './components/LoginForm'

Vue.use(Router)

const routes = [
  { path: '/', component: StoryBoard },
  { path: '/login', component: LoginForm }
]

const router = new Router({
  routes // short for `routes: routes`
})

export default router
