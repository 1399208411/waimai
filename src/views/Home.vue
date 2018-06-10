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
            <mt-cell class="type-item" label="美食" to="/shoplist">
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
        <shop-list></shop-list>
      </div>
    </div>
  </div>
</template>

<script>
  const log = console.log;
  import BScroll from 'better-scroll'
  import Split from '../components/split/Split.vue'
  import ShopList from '../components/shopList/ShopList.vue'

  export default {
    data() {
      return {};
    },

    components: {
      Split,
      ShopList
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
