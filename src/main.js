import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import Vicon from 'vue-awesome/components/Icon'
import Main from './layouts/main'
import Admin from './layouts/admin'

import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('main-layout', Main)
Vue.component('admin-layout', Admin)
Vue.component('v-icon', Vicon)
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
