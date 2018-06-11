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
        <div class="mine-info">
          <div class="icon-mine">
            <img width="30" height="30" src="../assets/logo.png">
          </div>
          <mt-cell title="风云辩手" label="136*****5529" style="width: 100%" is-link to="userinfo">
          </mt-cell>
        </div>
        <mt-cell title="我的地址">
          <!--<img src="../assets/logo.png" width="24" height="24">-->
        </mt-cell>
      </div>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {};
		},

		components: {},

		computed: {},

		created() {
		},

		mounted() {
		},

		methods: {}
	}
</script>

<style>
@import "../common/css/mine.css";
</style>
