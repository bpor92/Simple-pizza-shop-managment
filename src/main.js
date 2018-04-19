import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'

import App from './App.vue'

import { store } from './Store/store'
import { routes } from './Router/routes'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})

const router = new VueRouter({
  mode: 'history',
  routes
})

const vue = new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})

Vue()
