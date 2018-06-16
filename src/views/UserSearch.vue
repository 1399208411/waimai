<!--  -->
<template>
  <div>
    <div class="user-search">
      <mt-cell icon="back" @click.native="toBack"></mt-cell>
      <mt-search v-model="searchKey">
      <mt-cell
        v-for="(item,index) in result"
        :title="item.title"
        :value="item.value" :key="index">
      </mt-cell>
    </mt-search>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchKey: '',
        result: [
          {
            title: '1',
            value: '之一'
          },
          {
            title: '2',
            value: '之2'
          },
          {
            title: '3',
            value: '之3'
          }
        ]
      };
    },

    components: {},

    computed: {},

    created() {
    },

    mounted() {
    },

    methods: {
      toBack(){
//        console.log("test");
        this.$router.go(-1);
      }
    }
  }
</script>

<style>
.user-search{
  display: flex;
  width: 100%;
}
.user-search .mint-cell-wrapper{
  height: 52px;
  background-color: rgb(217,217,217);
}
.user-search .mint-search{
  /*width: 100%;*/
  flex: 1;
  height: auto;
}
</style>
