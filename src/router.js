import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
import Produtos from './pages/Produtos'
import Login from './pages/Login'
import Register from './pages/Register'
import CadastroProdutos from './pages/CadastroProdutos'
import RecuperarSenha from './pages/RecuperarSenha'

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
      component: Produtos,
      name: 'Produtos'
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
    },
    {
      path: '/cadastro_produtos',
      component: CadastroProdutos,
      name: 'CadastroProdutos'
    },
    {
      path: '/recuperar_senha',
      component: RecuperarSenha,
      name: 'RecuperarSenha'
    }
  ]
})

export default router
