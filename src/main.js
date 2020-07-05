//\\//\\//\\ LIBRARIES //\\//\\//\\
import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Vicon from 'vue-awesome/components/Icon'
import Vue from 'vue'
//\\//\\//\\ MODULES //\\//\\//\\
import router from './router'
import { index } from './stores'
//\\//\\//\\ COMPONENTS //\\//\\//\\
import App from './App.vue'
import Admin from './layouts/admin'
import Main from './layouts/main'

Vue.config.productionTip = false
Vue.component('admin-layout', Admin)
Vue.component('main-layout', Main)
Vue.component('v-icon', Vicon)
Vue.use(BootstrapVue)

new Vue({
  router,
  store: index,
  render: h => h(App),
}).$mount('#app')
