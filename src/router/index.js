import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/UserIndex.vue'
import Shop from '../views/Shop.vue'
import Goods from '../components/goods/Goods.vue'
import Test from '../views/test.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path:'/',
      name: 'Index',
      component: Index
    },
    {
      path:'/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
