<!--  -->
<template>
  <div class="goods" id="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" :class="{'current': currentIndex===index }"
            @click="selectMenu(index)">
          <span class="text border-1px">
            <span v-show="item.type>0" class="goods-icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="food-list food-list-hook">
          <h1 class="food title">{{item.name}}</h1>
          <ul>
            <li v-for="( food ,index) in item.foods" class="food-item border-1px">
              <div class="icon food">
                <img width="57" height="57" :src="food.icon">
              </div>
              <div class="content food">
                <h2 class="name food" @click="showFood(food)">{{food.name}}</h2>
                <p class="desc food">{{food.description}}</p>
                <div class="extra food">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price food">
                  <span class="now">￥{{food.price}}</span>
                  <span class="old" v-show="food.oldPrice">{{food.oldPrice}}</span>
                </div>
                <div class="cart-control-wrapper">
                  <cart-control :food="food"></cart-control>
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <!--<mt-popup v-model="showFoodFlag">-->
    <!--<div class="food-details">-->
    <!--<div class="food-pic">-->
    <!--<img src="" alt="">-->
    <!--</div>-->
    <!--<div class="food-dec">-->
    <!--<h1 class="food-name">{{this.selectFood.name}}</h1>-->
    <!--<p class="desc">月售{{this.selectFood.sellCount}}份 好评率{{selectFood.rating}}%</p>-->
    <!--</div>-->
    <!--<span class="food price">￥{{this.selectFood.price}}</span>-->
    <!--<span class="cart-control-wrapper">-->
    <!--<cart-control :food="this.selectFood"></cart-control>-->
    <!--</span>-->
    <!--</div>-->
    <!--</mt-popup>-->
    <shop-cart :select-foods="selectFoods" :delivery-price="seller.deliveryPrice"
               :min-price="seller.minPrice">
    </shop-cart>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import shopCart from '../shopcart/ShopCart.vue'
  import cartControl from '../cartcontrol/CartControl.vue'

  const ERR_OK = 0;
  var log = console.log;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        goods: [],
        listHeight: [],//菜单栏各个模块的高度
        scrollY: 0,
        showFoodFlag: false,
        selectFood: {}
      };
    },
    components: {
      shopCart,
      cartControl
    },

    computed: {
      currentIndex() {
        for (let i = 0; i < this.listHeight.length; i++) {
          let height1 = this.listHeight[i];
          let height2 = this.listHeight[i + 1];
          if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
            return i;
          }
        }
        return 0;
      },
      selectFoods() {
        let foods = [];
        this.goods.forEach((good) => {
          good.foods.forEach((food) => {
            if (food.count) {
              foods.push(food);
            }
          });
        });
        return foods;
      },
      descFood() {
        let food = {};

      }
    },
    created() {
      this.classMap = ['decreaseCart', 'discount', 'special', 'invoice', 'guarantee'];
      this.$http.get('/api/goods').then((res) => {
        let response = res.body;
        if (response.errno === ERR_OK) {
          this.goods = response.data;
          this.$nextTick(() => {
            this._initScroll();
            this._calculateHeight();
          });
        }
      });
      let orderId = this.$route.query.orderId;//获取路由中的参数
      log(orderId);
    },
    mounted() {
    },
    methods: {
      selectMenu(index) {
        let foodList = document.querySelectorAll('.food-list-hook');//获取滚动的列表
        let el = foodList[index];//获取指定的元素
        this.foodsScroll.scrollToElement(el, 300);//跳转至指定元素位置
      },
      _initScroll() {
        let ratings = document.querySelector('.ratings');
        let foodWrapper = document.querySelector('.foods-wrapper');
        this.meunScroll = new BScroll(this.$refs.menuWrapper, {
          click: true
        });
        this.foodsScroll = new BScroll(foodWrapper, {
          click: true,
          probeType: 3
        });
        this.ratingsScroll = new BScroll(ratings,{
          click:true
        });
        this.foodsScroll.on('scroll', (pos) => {
          this.scrollY = Math.abs(Math.round(pos.y));
        });
      },
      _calculateHeight() {
        let foodList = document.querySelectorAll('.food-list-hook');
        let height = 0;
        this.listHeight.push(height);
        for (let i = 0; i < foodList.length; i++) {
          let item = foodList[i];
          height += item.clientHeight;
          this.listHeight.push(height);
        }
      },
      showFood(item) {
        this.showFoodFlag = true;
        this.selectFood = item;
      }
    }
  }
</script>
<style>
  @import './goods.css';
</style>
