<!--  -->
<template>
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item,index) in goods" class="menu-item" >
          <span class="text border-1px">
            <span v-show="item.type>0" class="goods-icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">ff</div>
    <mt-tabbar fixed>
        <div style="width: 100%;height: 46px;background-color: #00b43c">购物车坑位</div>
    </mt-tabbar>
  </div>
</template>

<script>
  const ERR_OK  = 0;
  const log = console.log;
	export default {
	  prop:{
      seller:{
        type:Object
      }
    },
		data() {
			return {
			  goods:[]
      };
		},

		components: {},

		computed: {},

		created() {
      this.classMap = ['decreaseCart', 'discount', 'special', 'invoice', 'guarantee'];
	    this.$http.get('/api/goods').then((response)=>{
	      let res = response.body;
	      if(res.errno == ERR_OK){
	        this.goods = res.data;
	        log(this.goods);
        }
      });
		},

		mounted() {
		},

		methods: {}
	}
</script>

<style>
@import "goods.css";
/*@import "../../common/base.css";*/

</style>
