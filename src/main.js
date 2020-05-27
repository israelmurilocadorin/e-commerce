import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router'
import App from './App'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import { CImagem } from './components'

Vue.component('c-imagem', CImagem)

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')


