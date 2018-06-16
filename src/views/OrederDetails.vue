<!--  -->
<template>
  <div>
    <mt-header fixed title="订单详情">
      <router-link to="/order" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="order-details-wrapper" ref="orderDetailsScroll">
      <div class="order-details-content">
        <header>
          <!--<div class="order-shop-icon">-->
            <img src="../assets/logo.png" alt="" width="70" height="70" style="border-radius: 50%;background-color: #0089dc">
          <!--</div>-->
          <h1 class="order-status">订单已送达</h1>
          <p class="help-text">感谢您对本外卖平台的信任，期待再次光临</p>
          <mt-button type="primary">再来一单</mt-button>
        </header>
        <mt-cell title="麦当劳" class="order-shop" isLink to="/shop">
          <img slot="icon" src="../assets/logo.png" width="24" height="24">
        </mt-cell>
        <split></split>
        <div class="food-list">
          <ul>
            <li v-for=" item in 4" class="cart-item">
              <div class="food">羊肉串</div>
              <span class="quantity">x1</span>
              <span class="price">￥2.99</span>
            </li>
          </ul>
        </div>
        <!--<split style="height: 8px"></split>-->
        <p class="order-payment">
          <span>实付</span>￥11.66</p>
        <split style="height:2px "></split>
        <div class="delivery-info">
          <mt-cell title="配送信息"></mt-cell>
          <div class="list-item">
            <span>送达时间：</span>
            <p>尽快送达[11:40]</p>
          </div>
          <div class="list-item">
            <span style="margin-top: .1rem;">送货地址：</span>
            <div class="order-address-content">
              <p>李佳远（先生）</p>
              <p>1233456565</p>
              <p>广东省理发师海珠区纺织路东沙街24号8栋学生宿舍112房</p>
            </div>
          </div>
          <div class="list-item">
            <span>配送方式：</span>
            <p>蜂鸟快送</p>
          </div>
          <div class="list-item">
            <span>配送骑手：</span>
            <p>李佳远，12321321321</p>
          </div>
        </div>
        <split></split>
        <div class="order-info">
          <mt-cell title="订单信息"></mt-cell>
          <div class="list-item">
            <span>订单号</span>
            <p>3354354234432432</p>
          </div>
          <div class="list-item">
            <span>支付方式</span>
            <p>在线支付</p>
          </div>
          <div class="list-item">
            <span>下单时间</span>
            <p>2018-06-02 12:22</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Split from '../components/split/Split.vue'
  import BScroll from 'better-scroll'
	export default {
		data() {
			return {};
		},

		components: {
      Split
    },

		computed: {},

		created() {
		  this.$nextTick(()=>{
        this.orderDetailsScroll = new BScroll(this.$refs.orderDetailsScroll,{
          click:true
        })
      })
		},

		mounted() {
		},

		methods: {}
	}
</script>

<style>
@import "../common/css/orderDetails.css";
</style>
