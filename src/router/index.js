import Vue from 'vue'
import VueRouter from 'vue-router'

// 
import login from '../components/login.vue'
import main from '../components/main.vue'
import search from '../components/search.vue'
import order from '../components/order.vue'
import me from '../components/me.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', redirect: '/main'},
  {path: '/login', component: login},
  {path: '/main', component: main},
  {path: '/search', component: search},
  {path: '/order', component: order},
  {path: '/me', component: me}
]

const router = new VueRouter({
  routes
})

export default router
