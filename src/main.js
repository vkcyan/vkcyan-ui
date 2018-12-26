import Vue from 'vue'
import App from './App.vue'
import vkUI from 'vkcyan-ui'
Vue.config.productionTip = false

Vue.use(vkUI)
new Vue({
  render: h => h(App)
}).$mount('#app')
