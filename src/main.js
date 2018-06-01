import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import VeeValidate from 'vee-validate'

import App from './App.vue'
import { store } from './Store/store'
import { routes } from './Router/routes'
import Icon from 'vue-awesome/components/Icon'

// font-awesome icons
import 'vue-awesome/icons/check'
import 'vue-awesome/icons/shopping-basket'

Vue.use(VueRouter)
Vue.use(BootstrapVue)
Vue.use(VeeValidate, {fieldsBagName: 'formFields'})
Vue.component('icon', Icon)
const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
