<template>
  <div class="page-navbar">
    <div class="wrapper" ref="wrapper">
      <ul class="content">
        <li v-for="(item,index) in 30" class="test-item">{{index}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: 'page-navbar',
    data() {
      return {
        selected: '1'
      };
    },
    components: {},

    computed: {},

    created() {
      this.$nextTick(() => {
        this.fscroll = new BScroll(this.$refs.wrapper, {})
      });
      console.log(this.fscroll)
    },

    mounted() {

    },

    methods: {}
  };
</script>
<style>
  .wrapper{
    height: 400px;
    overflow: hidden;
  }
  .test-item {
    padding: 20px;
    background-color: #00b43c;
  }
</style>
