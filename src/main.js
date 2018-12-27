import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import vkUI from '../packages/index'
Vue.config.productionTip = false

Vue.use(vkUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
