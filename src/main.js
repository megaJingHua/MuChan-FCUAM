import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import axios from 'axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import VuePapaParse from 'vue-papa-parse'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(VuePapaParse)
axios.defaults.headers.post["Content-type"] = "application/json"
new Vue({
  render: h => h(App),
  mode: 'history',
  router
}).$mount('#app')
