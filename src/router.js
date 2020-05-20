import Vue from 'vue'
import Router from 'vue-router'

import Home from './pages/Home'
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
    }
  ]
})

export default router
