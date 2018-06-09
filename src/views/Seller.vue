<template>
  <div class="page-navbar">
    <!--<transition name="slide-fade">-->
      <seller-header :seller="seller" v-show="headerShow"></seller-header>
    <!--</transition>-->
    <v-touch v-on:swipeup="hideHeader" v-on:swipedown="showHeader">
      <mt-navbar class="page-part" v-model="selected">
        <mt-tab-item id="1">点餐</mt-tab-item>
        <mt-tab-item id="2">评价</mt-tab-item>
        <mt-tab-item id="3">商家</mt-tab-item>
      </mt-navbar>
    </v-touch>
    <mt-tab-container v-model="selected" id="tab-container-item">
      <mt-tab-container-item id="1" class="tab-item">
        <goods :seller="seller"></goods>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="tab-item">
        <rating :seller="seller"></rating>
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="tab-item">
        <seller-desc></seller-desc>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import Goods from '../components/goods/Goods.vue'
  import Rating from '../components/rating/Rating.vue'
  import SellerDesc from '../components/sellerDesc/SellerDesc.vue'
  import SellerHeader from '../components/SellerHeader/Header.vue'
  const log = console.log;
  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller:{},
        selected:'1',
        headerShow:true
      };
    },
    components: {
      Goods,
      SellerHeader,
      Rating,
      SellerDesc
    },
    computed: {},
    created() {
      this.$http.get('/api/seller').then((response)=>{
        let res = response.body;
        if(res.errno===ERR_OK){
          this.seller = res.data;
        }
      });


    },
    mounted() {

    },
    methods: {
      hideHeader(){
        this.headerShow = false;
        document.getElementById('goods').style.setProperty('top','50px','important');
        document.getElementById('ratings').style.setProperty('top','50px','important');
        document.getElementById('seller-desc').style.setProperty('top','50px','important');
      },
      showHeader(){
        this.headerShow = true;
        document.getElementById('goods').style.setProperty('top','346px','important');
        document.getElementById('ratings').style.setProperty('top','346px','important');
        document.getElementById('seller-desc').style.setProperty('top','346px','important');
      }
    }
  }
</script>
<style>
  .tab-item {
    margin-top: 4px;
  }
  .tab-item > router-link{
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
