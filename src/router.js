import Vue from 'vue'
import Router from 'vue-router'
import StoryBoard from './components/StoryBoard'
import LoginForm from './components/LoginForm'
import ProfileCard from './components/ProfileCard'

Vue.use(Router)

const routes = [
  { path: '/', component: StoryBoard },
  { path: '/login', component: LoginForm },
  { path: '/profile', component: ProfileCard }
]

const router = new Router({
  routes // short for `routes: routes`
})

export default router
