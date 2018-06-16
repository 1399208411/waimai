<!--  -->
<template>
  <div class="order">
    <mt-header fixed title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back">首页</mt-button>
      </router-link>
    </mt-header>
    <div class="order-list-wrapper" ref="orderScroll">
      <div class="order-list-content">
        <ul>
          <li v-for="(item,index) in orderList">
            <split style="height: 12px"></split>
            <div class="order-info" @click="toDetails">
              <div class="order-info-item">
                <div class="icon shop" @click.stop="toShop">
                  <img width="35" height="35" src="https://fuss10.elemecdn.com/e/b1/fc3345910c85aa5c8e2023112cb71png.png?imageMogr2/thumbnail/70x70/format/webp/quality/85">
                </div>
                <mt-cell :title="item.shopName" :label="item.orderTime" style="width: 100%" :value=status[item.orderStatus]></mt-cell>
              </div>
              <mt-cell :title="item.orderFood+'等'+item.orderFoodCount+'件物品'" class="order-desc">
                <span>￥{{item.orderPrice}}</span>
              </mt-cell>
              <mt-cell>
                <mt-button v-show="item.orderStatus" size="small" type="default" class="get-again" @click.stop="getAgain(item.orderId)">再来一单</mt-button>
                <mt-button v-show="!item.orderStatus" size="small" type="default" class="get-again" @click.stop="cancelOrder">取消订单</mt-button>
              </mt-cell>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Split from '../components/split/Split.vue'
  import BScroll from 'better-scroll'
	export default {
		data() {
			return {
			  status:["配送中","已送达","已取消"],
			  orderList:[
          {
            orderId:"mdl",
            shopName:"麦当劳",
            orderTime:"201510221707",
//           暂且这样规定订单状态 0配送中 1已送达 2已取消
            orderStatus:2,
            orderFood:"全家桶",
            orderFoodCount:9,
            orderPrice:"40",
          },
          {
            orderId:"kfc",
            shopName:"肯德基",
            orderTime:"201510221707",
//           暂且这样规定订单状态 0配送中 1已送达 2已取消
            orderStatus:0,
            orderFood:"全桶",
            orderFoodCount:9,
            orderPrice:"40",
          },
          {
            orderId:"hls",
            shopName:"华莱士",
            orderTime:"201510221707",
//           暂且这样规定订单状态 0配送中 1已送达 2已取消
            orderStatus:1,
            orderFood:"家桶",
            orderFoodCount:9,
            orderPrice:"40",
          },
          {
            orderId:"hls",
            shopName:"麦当劳",
            orderTime:"201510221707",
//           暂且这样规定订单状态 0配送中 1已送达 2已取消
            orderStatus:1,
            orderFood:"全家桶",
            orderFoodCount:9,
            orderPrice:"40",
          }
        ]
      };
		},

		components: {
      Split
    },

		computed: {

    },

		created() {
		  this.$nextTick(()=>{
		    this.orderScroll = new BScroll(this.$refs.orderScroll,{
		      click:true
        })
      });
		},

		mounted() {
      if(!this.orderScroll){
        this.orderScroll = new BScroll(this.$refs.orderScroll,{
          click:true
        });
      }
		},

		methods: {
      toDetails(){
        this.$router.push({
          path:'/order/details'
        })
      },
      toShop(){
        this.$router.push({
          path:'/shop'
        })
      },
      getAgain(id){
        this.$router.push({
          path:'/shop',
          query:{
            orderId:id
        }
        });
      },
      cancelOrder(){

      }
    }
	}
</script>

<style>
@import "../common/css/order.css";
</style>
