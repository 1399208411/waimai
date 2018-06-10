<!--  -->
<template>
  <div>
    <mt-swipe :show-indicators="false">
      <mt-swipe-item class="slide1">1</mt-swipe-item>
      <!--<mt-swipe-item class="slide2">2</mt-swipe-item>-->
      <!--<mt-swipe-item class="slide3">3</mt-swipe-item>-->
    </mt-swipe>
    <div class="business-scroll-wrapper" ref="businessScroll">
      <div class="business-scroll-content">
        <div class="type-list">
          <div class="type-list-one">
            <mt-cell class="type-item" label="美食" to="/seller">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="超市">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="夜宵">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="水果">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
          </div>
          <div class="type-list-one">
            <mt-cell class="type-item" label="折扣">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="鲜花">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="西餐">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="特色">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
          </div>
        </div>
        <split></split>
        <p>—推荐商家—</p>
        <div class="business-list">
          <ul>
            <li class="business-item border-1px" v-for="(item,index) in 10" @click="toSeller">
              <div class="icon business">
                <img width="57" height="57" src="../assets/logo.png">
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
                        <img src="../assets/减.svg" height="20" width="20">
                        <div class="business-discount-text">满80-40</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const log = console.log;
  import BScroll from 'better-scroll'
  import Split from '../components/split/Split.vue'
  import Star from '../components/star/Star.vue'

  export default {
    data() {
      return {};
    },

    components: {
      Split,
      Star
    },

    computed: {},

    created() {
      this.$nextTick(()=>{
        this.businessScroll = new BScroll(this.$refs.businessScroll,{
          click:true
        });
      });
    },

    mounted() {
    },

    methods: {
      toSeller(){
        this.$router.push({
          path:'goods'
        });
      }
    }
  }
</script>

<style>
  @import "../common/css/home.css";

  .type-list {
    width: 100%;
  }

  .type-list-one {
    display: flex;
  }

  .type-item {
    display: inline-block;
    height: 40px;
    width: 40px;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 8px;
    border-bottom: none;
  }
</style>
