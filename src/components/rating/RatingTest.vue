<!--  -->
<template>
  <div class="ratings" id="ratings" ref="ratings_list">
    <div class="ratings-content">
      <div class="over-view">
        <div class="over-view-left">
          <h1 class="ratings-score">{{seller.score}}</h1>
          <div class="ratings-title">综合评分</div>
          <div class="ratings-rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="over-view-right">
          <div class="ratings-score-wrapper">
            <span class="ratings-score-title">服务态度</span>
            <star :size="36" :score="seller.serviceScore" class="ratings-star"></star>
            <span class="left-ratings-score">{{seller.serviceScore}}</span>
          </div>
          <div class="ratings-score-wrapper">
            <span class="ratings-score-title">商品评分</span>
            <star :size="36" :score="seller.foodScore" class="ratings-star"></star>
            <span class="left-ratings-score">{{seller.foodScore}}</span>
          </div>
          <div class="ratings-delivery-wrapper">
            <span class="ratings-score-title">送达时间</span>
            <span class="ratings-delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <split></split>
      <rating-select @select="selectRating" @toggle="toggleContent" :selectType="selectType"
                     :onlyContent="onlyContent"
                     :ratings="ratings"></rating-select>
      <div class="rating-con-wrapper">
        <ul>
          <li v-for="(rating,index) in ratings"  class="rating-item">
            <div class="rating-avatar">
              <!--<img :src="rating.avatar">-->
            </div>
            <div class="rating-content">
              <h1 class="rating-name">{{rating.username}}</h1>
              <div class="rating-star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="rating-delivery" v-show="rating.deliveryTime"></span>
              </div>
              <p class="rating-content-text">{{rating.text}}</p>
              <div class="recommend">
                <span class="icon-thumb_up"></span>
                <span class="item" v-for="item in rating.recommend">{{item}}</span>
              </div>
              <div class="time">
                {{rating.rateTime}}
              </div>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import Star from '../star/Star.vue'
  import RatingSelect from '../ratingSelect/RatingSelect.vue'
  import Split from '../split/Split.vue'
  const ALL = 2;
  const ERR_OK = 0;
	export default {
    props:{
      seller:{
        type:Object
      }
    },
		data() {
			return {
        ratings:[],
        selectType:ALL,
        onlyContent:true
      };
		},

		components: {
      Star,
      RatingSelect,
      Split
    },

		computed: {},

		created() {
      this.$http.get('/api/ratings').then((response)=>{
        let res = response.body;
        if(res.errno===ERR_OK){
          this.ratings = res.data;
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.ratings_list, {
              click:true
            })
          })
        }
      });
		},

		mounted() {
		},

		methods: {
      needShow(type, text){

      },
      selectRating(type){

      },
      toggleContent(){

      }
    }
	}
</script>

<style>
@import "test.css";
</style>
