import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueDropdown from 'vue-dynamic-dropdown'

import App from './prod_search.vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
Vue.component('vue-dropdown', VueDropdown)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
