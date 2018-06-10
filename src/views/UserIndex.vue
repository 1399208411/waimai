<template>
  <div class="user-home">
    <div class="">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="home">
          <home></home>
        </mt-tab-container-item>
        <mt-tab-container-item id="order">
          <!--<mt-cell v-for="(n,index) in 5" :title="'订单 ' + n" />-->
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <div class="page-part">
            <!--<mt-cell v-for="(n,index) in 12" :title="'我的 ' + n" />-->
          </div>
          <router-link to="/">
            <mt-button type="danger" size="large">退出</mt-button>
          </router-link>
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
  export default {
    data() {
      return {
        selected: 'home'
      };
    },
    components: {
      Home
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
