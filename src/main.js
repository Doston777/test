import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'


Vue.use(BootstrapVue)

const router = new VueRouter({
  routes: []
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
    router
}).$mount('#app')
