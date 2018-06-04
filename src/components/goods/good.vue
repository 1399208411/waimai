<!--  -->
<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" >
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
                <h2 class="name food">{{food.name}}</h2>
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
                  <!--<cart-control :food="food"></cart-control>-->
                </div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <mt-tabbar fixed>
        <div style="width: 100%;height: 46px;background-color: #00b43c">购物车坑位</div>
    </mt-tabbar>
  </div>
</template>

<script>
  const ERR_OK  = 0;
  const log = console.log;
	export default {
	  prop:{
      seller:{
        type:Object
      }
    },
		data() {
			return {
			  goods:[]
      };
		},

		components: {},

		computed: {},

		created() {
      this.classMap = ['decreaseCart', 'discount', 'special', 'invoice', 'guarantee'];
	    this.$http.get('/api/goods').then((response)=>{
	      let res = response.body;
	      if(res.errno == ERR_OK){
	        this.goods = res.data;
	      }
      });
		},

		mounted() {
		},

		methods: {}
	}
</script>

<style>
@import "goods.css";
/*@import "../../common/base.css";*/

</style>
