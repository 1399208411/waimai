import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/UserIndex.vue'
import UserLogin from '../views/UserLogin.vue'
import Home from '../views/Home.vue'
import Order from '../views/Order.vue'
import Mine from '../views/Mine.vue'
import UserInfo from '../views/UserInfo.vue'
import ShopList from '../views/RestaurantList.vue'
import Shop from '../views/Shop.vue'
import Goods from '../components/goods/Goods.vue'
import Ratings from '../components/rating/Rating.vue'
import SellerDesc from '../components/sellerDesc/SellerDesc.vue'
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
      // name: 'Index',
      component: Index,
      children:[
        {
          path:'',
          name:'Home',
          component:Home
        },
        {
          path:'order',
          name:'Order',
          component:Order
        },
        {
          path:'mine',
          name:'Mine',
          component:Mine
        }
      ]
    },
    {
      path: '/login',
      name: 'UserLogin',
      component: UserLogin
    },
    {
      path:'/userinfo',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path:'/shoplist',
      name: 'ShopList',
      component: ShopList
    },
    {
      path:'/shop',
      // name: 'Shop',
      component: Shop,
      children:[
        {
          path:'',
          name:'Goods',
          component:Goods
        },
        {
          path:'ratings',
          name:'Ratings',
          component:Ratings
        },
        {
          path:'selldesc',
          name:'SellerDesc',
          component:SellerDesc
        }
      ]
    }
  ]
})
