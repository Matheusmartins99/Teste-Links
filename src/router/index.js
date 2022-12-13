import Vue from 'vue'
import VueRouter from 'vue-router'
import TesteLinks from '../views/TesteLinks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/testelinks',
    name: 'TesteLnks',
    component: TesteLinks,
  },
]

const router = new VueRouter({
  routes
})

export default router
