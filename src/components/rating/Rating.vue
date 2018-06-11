<template>
  <div class="ratings" id="ratings" ref="ratingsScroll">
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
      <div class="rating-con-wrapper" ref="ratings">
        <ul>
          <li v-for="(rating,index) in ratings" v-show="needShow(rating.rateType, rating.text)" class="rating-item">
            <div class="rating-avatar">
              <img :src="rating.avatar">
            </div>
            <div class="rating-content">
              <h1 class="rating-name">{{rating.username}}</h1>
              <div class="rating-star-wrapper">
                <star :size="24" :score="rating.score"></star>
                <span class="rating-delivery" v-show="rating.deliveryTime"></span>
              </div>
              <p class="rating-content-text">{{rating.text}}</p>
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
  const log = console.log;
  export default {
    props: {
      seller: {
        type: Object
      }
    },
    data() {
      return {
        ratings: [],
        selectType: ALL,
        onlyContent: true
      }
    },
    components: {
      Star,
      RatingSelect,
      Split
    },
    created() {
      this.$http.get('/api/ratings').then((response) => {
        let res = response.body;
        if (res.errno === ERR_OK) {
          this.ratings = res.data;
          this.$nextTick(() => {
            this._initScroll();
          });
        }
      });
    },
    mounted() {
      if(!this.ratingsScroll){
          this._initScroll();
      }
    },
    watch:{
      'selected'(){
        log(this.selected());
        this._initScroll();
      }
    },
    methods: {
      _initScroll() {
        this.ratingsScroll = new BScroll(this.$refs.ratingsScroll, {
          click: true
        });
      },
      needShow(type, text) {
        if (this.onlyContent && !text) {
          return false;
        }
        if (this.selectType === ALL) {
          return true;
        } else {
          return type === this.selectType;
        }
      },
      selectRating(type) {
        this.selectType = type;
        this.$nextTick(() => {
          this.ratingsScroll.refresh();
        });
      },
      toggleContent() {
        this.onlyContent = !this.onlyContent;
        this.$nextTick(() => {
          this.ratingsScroll.refresh();
        });
      }
    }
  };
</script>
<style>
  @import "rating.css";
</style>
