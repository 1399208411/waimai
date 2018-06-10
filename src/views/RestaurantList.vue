<!--  -->
<template>
  <div class="restaurant-list">
    <mt-header fixed title="美食">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="screen-menu-wrapper">
      <div class="screen-menu-item first">综合排序</div>
      <div class="screen-menu-item">距离最近</div>
      <div class="screen-menu-item">销量最高</div>
      <div class="screen-menu-item">配送最快</div>
      <div class="screen-menu-item last">起送价最低</div>
    </div>
    <div class="shop-list-wrapper" ref="shopListScroll">
      <div class="shop-list-content">
        <shop-list></shop-list>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import ShopList from '../components/shopList/ShopList.vue'
	export default {
		data() {
			return {

      };
		},

		components: {
      ShopList
    },

		computed: {},

		created() {
		  this.$nextTick(()=>{
		    this.shopListScroll = new BScroll(this.$refs.shopListScroll,{
		      click:true
        });
      });
		},

		mounted() {
		},

		methods: {}
	}
</script>

<style>
@import "../common/css/resList.css";
</style>
