import Vue from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)

Vue.use(vueAxios, axios);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
