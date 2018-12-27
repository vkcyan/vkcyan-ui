import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import page from '../pages/page'

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes:[
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/page',
      name: 'page',
      component: page
    }
  ]
})