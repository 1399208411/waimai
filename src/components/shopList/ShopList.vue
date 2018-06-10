<!--  -->
<template>
  <div class="business-list">
    <ul>
      <li class="business-item border-1px" v-for="(item,index) in 10" @click="toSeller">
        <div class="icon business">
          <img width="57" height="57" src="https://fuss10.elemecdn.com/e/b1/fc3345910c85aa5c8e2023112cb71png.png?imageMogr2/thumbnail/70x70/format/webp/quality/85">
        </div>
        <div class="content business">
          <h1 class="business-name">麦当劳</h1>
          <div class="business-info">
            <div class="business-star-wrapper">
              <star :size="24" :score="5"></star>
              <span class="business-sales">5 月售388单</span>
            </div>
            <div class="business-buy-info">
              <div class="left">￥30起送 | 配送费￥5</div>
              <div class="right">728m | 45分钟</div>
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
			return {};
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
      toSeller(){
        this.$router.push({
          path:'shop'
        });
      }
    }
	}
</script>

<style>
  @import 'shoplist.css';
</style>
