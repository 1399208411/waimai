<template>
  <div class="page-navbar">

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
