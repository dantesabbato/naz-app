//\\//\\//\\ LIBRARIES //\\//\\//\\
import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import BootstrapVue from 'bootstrap-vue'
import Vicon from 'vue-awesome/components/Icon'
import Vue from 'vue'
import Vuelidate from "vuelidate"

//\\//\\//\\ MODULES //\\//\\//\\
import router from './router'
import store from './stores/index'
import { auth } from './firebase'

//\\//\\//\\ COMPONENTS //\\//\\//\\
import App from './App.vue'
import Admin from './layouts/admin'
import Main from './layouts/default'

Vue.config.productionTip = false
Vue.component('admin-layout', Admin)
Vue.component('main-layout', Main)
Vue.component('v-icon', Vicon)
Vue.use(BootstrapVue)
Vue.use(Vuelidate)

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }

  if (user) {
    store.dispatch('fetchUserProfile', user)
  }
})
