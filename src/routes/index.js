import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

let routerList = ['guide', 'install', 'quickStart','updateLog']
let routerChild = []
routerList.map(router => {
  routerChild.push({
    path: `${router}`,
    name: `${router}`,
    component: resolve => require([`../pages/${router}.vue`], resolve)
  })
})


let routes = [
  {
    path: '*',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: resolve => require([`../pages/home.vue`], resolve)
  },
  {
    path: '/page',
    name: 'page',
    component: resolve => require([`../pages/page.vue`], resolve),
    redirect: '/page/guide',
    children: routerChild
  }
]
export default new Router({
  mode: 'history',
  routes
})
