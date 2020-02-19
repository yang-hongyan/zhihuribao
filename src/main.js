import Vue from 'vue'
import App from './App.vue'
import router from './router'
import css from './assets/css.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import { Button } from 'vant';
import 'vant/lib/index.css';
//Vue.prototype.$axios=axios
Vue.use(Vant) 
Vue.use(Button);
Vue.use(VueAxios,axios)
axios.defaults.baseURL = '/api'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
