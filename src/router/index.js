import Vue from 'vue'
import VueRouter from 'vue-router'

// 
import login from '../components/login.vue'
import search from '../components/search.vue'
import order from '../components/order.vue'
import me from '../components/me.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/login'},
  {path: '/login', component: login},
  {path: '/main/search', component: search},
  {path: '/main/order', component: order},
  {path: '/main/me', component: me}
]

const router = new VueRouter({
  routes
})

export default router
