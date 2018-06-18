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
            <div class="type-item" v-for="item in typeList" @click="toShop(item)">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
              <p class="food-type">{{item}}</p>
            </div>
          </div>
          <div class="type-list-one">
            <div class="type-item" v-for="item in typeList2" @click="toShop(item)">
              <img slot="icon" src="../assets/logo.png" width="24" height="24">
              <p class="food-type">{{item}}</p>
            </div>
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
        searchKey:'',
        typeList:["美食","超市","水果生鲜","午餐"],
        typeList2:["大牌5折","鲜花","麻辣烫","地方菜"],
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
      toShop(item){
        this.$router.push({
          path:'/shoplist',
          query:{
            keyword:item
          }
        })
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
    width: 4rem;
    margin: 8px auto 8px auto;
  }
  .type-item .food-type{
    margin: 0 auto 6px auto;
    color: #888;
    font-size: 12px;
  }
</style>
