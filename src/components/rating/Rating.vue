<!--  -->
<template>
  <div class="rating" id="rating">
    <div class="ratings-content"
         v-infinite-scroll="loadMore"
         infinite-scroll-distance="10">
      <div class="star-wrapper">
        <star :score="2.5"></star>
      </div>
      <ul>
        <li v-for="(item,index) in list" :key="index">
          hello
        </li>
      </ul>
      评论
    </div>
  </div>
</template>

<script>
  import Star from '../star/Star.vue'
	export default {
		data() {
			return {
			  list:[],
			  loading:false,
        allLoaded:false,
        wrapperHeight:0
      };
		},

		components: {
		  Star
    },

		computed: {},

		created() {
		},

		mounted() {
		},

		methods: {
      loadMore() {
        this.loading = true;
        setTimeout(() => {
          let last = this.list[this.list.length - 1];
          for (let i = 1; i <= 30; i++) {
            this.list.push(last + i);
          }
          this.loading = false;
        }, 2500);
      }
    }
	}
</script>

<style>
@import "rating.css";
</style>
