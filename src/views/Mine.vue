<!--  -->
<template>
  <div class="mine">
    <mt-header fixed title="我的">
      <router-link to="/" slot="left">
        <mt-button icon="back">首页</mt-button>
      </router-link>
    </mt-header>
    <div class="mine-wrapper">
      <div class="mine-content">
        <mt-cell :title=this.user.name :label=this.user.tel  is-link to="userinfo" class="my-info">
          <img  slot="icon" src="../assets/logo.png" width="50" height="50" >
        </mt-cell>
        <split></split>
        <mt-cell title="我的地址" is-link to="useraddress">
          <!--<img src="../assets/logo.png" width="24" height="24">-->
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
  import Split from '../components/split/Split.vue'
	export default {
		data() {
			return {
			  user:{
			    name:"风云辩手",
          tel:"13698524554",

        }
      };
		},

		components: {
		  Split
    },

		computed: {},

		created() {
		  console.log(this.user);
		},

		mounted() {
		},

		methods: {}
	}
</script>

<style>
@import "../common/css/mine.css";
</style>
