<template>
  <div class="ratings" id="ratings">
    <div class="ratings-content">
      <div class="over-view">
        <div class="over-view-left">
          <h1 class="ratings-score">{{seller.score}}</h1>
          <div class="ratings-title">综合评分</div>
          <div class="ratings-rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="over-view-right">
          <div class="ratings-score-wrapper">
            <span class="ratings-score-title">服务态度</span>
            <star :size="36" :score="seller.serviceScore" class="ratings-star"></star>
            <span class="left-ratings-score">{{seller.serviceScore}}</span>
          </div>
          <div class="ratings-score-wrapper">
            <span class="ratings-score-title">商品评分</span>
            <star :size="36" :score="seller.foodScore" class="ratings-star"></star>
            <span class="left-ratings-score">{{seller.foodScore}}</span>
          </div>
          <div class="ratings-delivery-wrapper">
            <span class="ratings-score-title">送达时间</span>
            <span class="ratings-delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Star from '../star/Star.vue'
  export default {
    props:{
      seller:{
        type:Object
      }
    },
    data(){
      return{

      }
    },
    components:{
      Star
    },
    created() {
    },

    methods: {
    }
  };
</script>
<style>
  @import "rating.css";
</style>
