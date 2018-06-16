import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/UserIndex.vue'
import Home from '../views/Home.vue'
import UserSearch from '../views/UserSearch.vue'
import Order from '../views/Order.vue'
import OrderDetail from '../views/OrederDetails.vue'
import Mine from '../views/Mine.vue'
import UserInfo from '../views/UserInfo.vue'
import UserAddress from '../views/UserAddress.vue'
import UserAddressEdit from '../views/UserAddressEdit.vue'
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
      path:'/search',
      name:'UserSearch',
      component:UserSearch
    },
    {
      path:'/order/details',
      name:'OrderDetail',
      component:OrderDetail
    },
    {
      path: '/useraddress',
      name: 'UserAddress',
      component: UserAddress
    },
    {
      path: '/useraddress/edit',
      name: 'UserAddressEdit',
      component: UserAddressEdit
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
      name: 'Shop',
      component: Shop,
    }
  ]
})
