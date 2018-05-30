import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Seller from '../views/Seller.vue'
import Goods from '../components/Goods/Goods.vue'
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
      name: 'Home',
      component: Home
    },
    {
      path:'/seller',
      name: 'Seller',
      component: Seller,
      redirect:'goods',
      children:[
        {
          path:'/goods',
          name:'Goods',
          component:Goods
        },
        {
          path: '/ratings',
          name: 'Ratings',
          component: Goods
        },
        {
          path: '/store',
          name: 'Store',
          component: Goods
        },
      ]
    }
  ]
})
