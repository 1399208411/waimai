<!--  -->
<template>
  <div class="business-list">
    <ul>
      <li class="business-item border-1px" v-for="(item,index) in sellerList" @click="toSeller(item.id)">
        <div class="icon business">
          <img width="57" height="57" src="https://fuss10.elemecdn.com/e/b1/fc3345910c85aa5c8e2023112cb71png.png?imageMogr2/thumbnail/70x70/format/webp/quality/85">
        </div>
        <div class="content business">
          <h1 class="business-name">{{item.name}}</h1>
          <div class="business-info">
            <div class="business-star-wrapper">
              <star :size="24" :score="item.score"></star>
              <span class="business-sales">{{item.score}} 月售{{item.sellCount}}单</span>
            </div>
            <div class="business-buy-info">
              <div class="left">￥{{item.minPrice}}起送 | 配送费￥{{item.deliveryPrice}}</div>
              <div class="right">728m | {{item.deliveryTime}}分钟</div>
            </div>
          </div>
          <div class="business-discount">
            <ul>
              <li>
                <div class="business-discount-wrapper">
                  <img src="./img/减.svg" height="20" width="20">
                  <div class="business-discount-text">满80-40</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import Star from '../star/Star.vue'
	export default {
		data() {
			return {
			  sellerList:[
          {
            id:"mdl",
            name: "麦当劳",
            deliveryTime: 45,
            score: 4.2,
            sellCount: 90,
            minPrice: 30,
            deliveryPrice: 4,
          },
          {
            id:"yc",
            name: "益茶",
            deliveryTime: 21,
            score: 4.5,
            sellCount: 60,
            minPrice: 12,
            deliveryPrice: 4,
          },
          {
            id:"gjf",
            name: "盖浇饭",
            deliveryTime: 15,
            score: 5,
            sellCount: 900,
            minPrice: 10,
            deliveryPrice: 4,
          },
          {
            id:"qbb",
            name: "Q堡堡",
            deliveryTime: 5,
            score: 4.4,
            sellCount: 900,
            minPrice: 10,
            deliveryPrice: 4,
          },
          {
            id:"zxjp",
            name: "正新鸡排",
            deliveryTime: 15,
            score: 3,
            sellCount: 190,
            minPrice: 20,
            deliveryPrice: 4,
          },
          {
            id:"kfc",
            name: "肯德基",
            deliveryTime: 30,
            score: 4.8,
            sellCount: 900,
            minPrice: 30,
            deliveryPrice: 4,
          },
        ]
      };
		},

		components: {
		  Star
    },

		computed: {},

		created() {
		},

		mounted() {
		},

		methods: {
      toSeller(shopId){
        this.$router.push({
          path:'shop',
          query:{
            shopId:shopId
          }
        });
      }
    }
	}
</script>

<style>
  @import 'shoplist.css';
</style>
