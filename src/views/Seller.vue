<template>
  <div class="page-navbar">
    <seller-header :seller="seller"></seller-header>
    <mt-navbar class="page-part" v-model="selected">
      <mt-tab-item id="1">点餐</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1" class="tab-item">
        <goods :seller="seller"></goods>
      </mt-tab-container-item>
      <mt-tab-container-item id="2" class="tab-item">
      </mt-tab-container-item>
      <mt-tab-container-item id="3" class="tab-item">
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
  import Goods from '../components/goods/Goods.vue'
  import SellerHeader from '../components/SellerHeader/Header.vue'
  const log = console.log;
  const ERR_OK = 0;
  export default {
    data() {
      return {
        seller:{},
        selected:'1'
      };
    },
    components: {
      Goods,
      SellerHeader
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

    }
  }
</script>
<style>
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom:1px solid rgba(7,17,27,0.1);
  }
  .tab-item {
    margin-top: 4px;
  }
  .tab-item > router-link{
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  .router-link-active{/*路由选中的时候生效*/
    color: rgb(240,20,20);
  }
</style>
