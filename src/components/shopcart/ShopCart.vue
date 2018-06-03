<!--  -->
<template>
  <div class="shop-carts">
    <div class="shop-cart-content">
      <div class="content-left">
        <div class="logo-wrapper">
          <div class="logo shop-cart" :class="{'highLight':totalCount>0}">
            <i class="icon-shopping-cart" :class="{'highLight':totalCount>0}">
              <img src="./img/cart.svg" width="20" height="20">
            </i>
          </div>
          <div class="foodNum" v-show="totalCount">{{totalCount}}</div>
        </div>
        <div class="price shop-cart" :class="{'highLight':totalPrice>0}">￥{{totalPrice}}</div>
        <div class="desc shop-cart">另需配送费￥{{deliveryPrice}}元</div>
      </div>
      <div class="content-right">
        <div class="pay shop-cart" :class="payClass">{{ payDesc }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [
            {
              price:10,
              count:1
            }
          ];
        }
      },
      deliveryPrice: {
        type: Number,
        default: 0
      },
      minPrice: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {};
    },

    components: {},

    computed: {
      totalPrice() {
        let total = 0;
        this.selectFoods.forEach((food) => {
          total += food.price * food.count;
        });
        return total
      },
      totalCount() {
        let count = 0;
        this.selectFoods.forEach((food) => {
          count += food.count;
        });
        return count;
      },
      payDesc() {
        if (this.totalPrice === 0) {
          return `￥${this.minPrice}元起送`
        } else if (this.totalPrice < this.minPrice) {
          let diff = this.minPrice - this.totalPrice;
          return `还差${diff}元`
        } else {
          return '去结算'
        }
      },
      payClass(){
        if(this.totalPrice < this.minPrice){
          return 'no-enough'
        }else {
          return 'enough'
        }
      }
    },

    created() {
    },

    mounted() {
    },

    methods: {}
  }
</script>

<style>
  @import "./shopcart.css";
</style>
