<template>
  <div class="user-home">
    <div class="">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="home">
          <home></home>
        </mt-tab-container-item>
        <mt-tab-container-item id="order">
          <order></order>
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <mine></mine>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="home">
        <img slot="icon" src="../assets/logo.png">
        外卖
      </mt-tab-item>
      <mt-tab-item id="order">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import Order from './Order.vue'
  import Mine from './Mine.vue'
  export default {
    data() {
      return {
        selected: 'home'
      };
    },
    components: {
      Home,
      Order,
      Mine
    },

    computed: {},
  };
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }

  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
</style>
