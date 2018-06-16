<!--  -->
<template>
  <div>
    <header class="home-header">
      <mt-cell title="仲恺农业工程学院"></mt-cell>
      <!--<mt-search v-model="searchKey"></mt-search>-->
      <router-link to="/search">
        <div class="search-box">
          <img src="../assets/搜索.svg" width="22" height="22">
          <span>搜索外卖商家、商品名称</span>
        </div>
      </router-link>
      <section class="ads-gif">
        <img src="//fuss10.elemecdn.com/0/63/b7dbf743a3e0d9729a5db136c5c3fjpeg.jpeg?imageMogr/format/webp/">
      </section>
    </header>
    <div class="business-scroll-wrapper" ref="businessScroll">
      <div class="business-scroll-content">
        <div class="type-list">
          <div class="type-list-one">
            <mt-cell class="type-item" label="美食" :to="{path:'/shoplist',query:{keyword:'美食'}}">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="超市" :to="{path:'/shoplist',query:{keyword:'超市'}}">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="夜宵" :to="{path:'/shoplist',query:{keyword:'夜宵'}}">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="水果" :to="{path:'/shoplist',query:{keyword:'水果'}}">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
          </div>
          <div class="type-list-one">
            <mt-cell class="type-item" label="折扣" :to="{path:'/shoplist',query:{keyword:'折扣'}}">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="鲜花" :to="{path:'/shoplist',query:{keyword:'鲜花'}}">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="西餐" :to="{path:'/shoplist',query:{keyword:'西餐'}}">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
            </mt-cell>
            <mt-cell class="type-item" label="特色" :to="{path:'/shoplist',query:{keyword:'特色'}}">
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
      return {
        searchKey:''
      };
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
    border-color: white;
  }
  .type-item .mint-cell-wrapper{
    border-color: #0085ff;
  }
</style>
