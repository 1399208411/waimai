import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/UserIndex.vue'
import ShopList from '../views/RestaurantList.vue'
import Shop from '../views/Shop.vue'
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
      path:'/shoplist',
      name: 'ShopList',
      component: ShopList
    },
    {
      path:'/shop',
      name: 'Shop',
      component: Shop
    }
  ]
})
