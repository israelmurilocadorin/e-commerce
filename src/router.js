import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Index'
Vue.use(Router)

const router = new Router({
  mode: 'history',        
  routes: [
    {
      path: '',
      component: Home,
      name: 'Home'
    }
  ]
})

export default router
