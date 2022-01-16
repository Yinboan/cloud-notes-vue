import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import el from 'element-ui'
import '/theme/index.css';
Vue.config.productionTip = false
Vue.use(el)

window.$VM = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')