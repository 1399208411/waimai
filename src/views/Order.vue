<!--  -->
<template>
  <div class="order">
    <mt-header fixed title="我的订单">
      <router-link to="/" slot="left">
        <mt-button icon="back">首页</mt-button>
      </router-link>
    </mt-header>
    <div class="order-list-wrapper" ref="orderScroll">
      <div class="order-list-content">
        <ul>
          <li v-for="(item,index) in 5">
            <split style="height: 12px"></split>
            <div class="order-info">
              <div class="order-info-item">
                <div class="icon shop">
                  <img width="35" height="35" src="https://fuss10.elemecdn.com/e/b1/fc3345910c85aa5c8e2023112cb71png.png?imageMogr2/thumbnail/70x70/format/webp/quality/85">
                </div>
                <mt-cell title="麦当劳" label="20151022471" style="width: 100%" value="已送达"></mt-cell>
              </div>
              <mt-cell title="全家桶等9件物品" class="order-desc">
                <span>￥40</span>
              </mt-cell>
              <mt-cell>
                <mt-button size="small" type="default" class="get-again">再来一单</mt-button>
              </mt-cell>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Split from '../components/split/Split.vue'
  import BScroll from 'better-scroll'
	export default {
		data() {
			return {};
		},

		components: {
      Split
    },

		computed: {

    },

		created() {
		  this.$nextTick(()=>{
		    this.orderScroll = new BScroll(this.$refs.orderScroll,{
		      click:true
        })
      });
		},

		mounted() {
      if(!this.orderScroll){
        this.orderScroll = new BScroll(this.$refs.orderScroll,{
          click:true
        });
      }
		},

		methods: {}
	}
</script>

<style>
@import "../common/css/order.css";
</style>
