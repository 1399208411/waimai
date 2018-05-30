<!--  -->
<template>
  <div class="seller-head">
    <mt-header fixed title="乐凯撒披萨" style="font-weight: 700">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div style="">
      <div class="shop-cover">
        <img src="./img/shop-over.jpg" width="100%" height="100%">
      </div>
      <div class="sign">
        <img src="./img/pic.svg"width="100%" height="100%">
      </div>
    </div>
    <section class="seller content">
      <div style="height: 20px"></div><!--占位顶-->
      <div class="seller shop-title">
        <h1>乐凯撒披萨</h1>
      </div>
      <div class="description-wrapper">
        <div class="description">4.8 月售610单 蜂鸟快送 约40分钟 距离4.8km</div>
        <div class="remark">欢迎光临，用餐高峰请提前下单 谢谢</div>
      </div>
    </section>
  </div>
</template>

<script>
  import './sellerHeader.css';
	export default {
	  props:{
	    seller:{
	      type:Object
      }
    },
		data() {
			return {
      };
		},

		components: {},

		computed: {},

		created() {
		},

		mounted() {
		},

		methods: {}
	}
</script>

<style>

</style>
