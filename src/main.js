import Vue from 'vue'
import App from './App.vue'
import store from './store'
import i18n from './i18n'
import vuetify from './plugins/vuetify';
import VueLodash from 'vue-lodash'

Vue.use(VueLodash)

Vue.config.productionTip = false

new Vue({
  store,
  i18n,
  vuetify,
  render: h => h(App)
}).$mount('#app')
