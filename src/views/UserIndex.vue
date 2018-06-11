<template>
  <div class="user-home">
    <div class="">
      <mt-tab-container class="page-tabbar-container" v-model="selected">
        <mt-tab-container-item id="home">
          <router-view/>
        </mt-tab-container-item>
        <mt-tab-container-item id="order">
          <router-view/>
        </mt-tab-container-item>
        <mt-tab-container-item id="mine">
          <router-view/>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>

    <mt-tabbar v-model="selected" fixed>
        <mt-tab-item2 id="home" route="/">
            <img slot="icon" src="../assets/logo.png">
            外卖
        </mt-tab-item2>
      <mt-tab-item2 id="order" route="/order">
        <img slot="icon" src="../assets/logo.png">
        订单
      </mt-tab-item2>
      <mt-tab-item2 id="mine" route="/mine">
        <img slot="icon" src="../assets/logo.png">
        我的
      </mt-tab-item2>
    </mt-tabbar>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import Order from './Order.vue'
  import Mine from './Mine.vue'
  import mtTabItem2 from '../components/tab-item-diy/mt-tab-item2.vue'
  export default {
    data() {
      return {
        selected: 'home'
      };
    },
    components: {
      Home,
      Order,
      Mine,
      mtTabItem2
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
