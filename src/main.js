import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routers} from './routers'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from './store/store.js'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: routers
})

new Vue({
  router: router,
  store:store,
  render: h => h(App),
}).$mount('#app')
