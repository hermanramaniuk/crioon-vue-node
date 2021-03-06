import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import './plugins/base'
import './plugins/chartist'
import './plugins/vee-validate'
import './plugins/vue-world-map'
import vuetify from './plugins/vuetify'
import i18n from './i18n'
import axios from 'axios';
import {config} from './service/config'
require('./assets/scss/custome_styling.scss');
axios.defaults.baseURL = config.BASE_URL;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
}).$mount('#app')
