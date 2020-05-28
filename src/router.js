import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import FormularioProdutos from './pages/formularioProdutos'

Vue.use(Router)

const router = new Router({
  mode: 'history',        
  routes: [
    {
      path: '',
      component: Home,
      name: 'Home'
    },
    {
      path: '/produtos',
      component: FormularioProdutos,
      name: 'Formulário Produtos'
    },
    {
      path: '/login',
      component: Login,
      name: 'Login'
    },
    {
      path: '/register',
      component: Register,
      name: 'Register'
    }
  ]
})

export default router
