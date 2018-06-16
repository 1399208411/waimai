<!--  -->
<template>
  <div class="shop-carts">
    <div class="shop-cart-content" @click="toggleList">
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
      <div class="content-right" @click.stop="toPay">
        <div class="pay shop-cart" :class="payClass">{{ payDesc }}</div>
      </div>
    </div>
    <!--<mt-popup class="shop-cart-list" v-model="showCartList" position="bottom" popup-transition="popup-fade">-->
    <transition name="fold">
      <div class="shop-cart-list" v-show="showCartList">
        <div class="list-header">
          <h1 class="shop-cart-list-title">已选商品</h1>
          <span class="emptyCart">清空</span>
        </div>
        <div class="cart-list-container">
          <ul>
            <li class="selected-food" v-for="(item,index) in selectFoods">
              <span class="selected-food-name">{{item.name}}</span>
              <span class="selected-food-price">
                <span>￥{{item.price * item.count}}</span>
              </span>
              <span class="shop-cart-control-wrapper">
                <cart-control :food="item"></cart-control>
              </span>
            </li>
          </ul>
        </div>
        <!--</mt-popup>-->
      </div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import MtPopup from "../../../node_modules/mint-ui/packages/popup/src/popup.vue";
  import cartControl from '../cartcontrol/CartControl.vue'

  export default {
    props: {
      selectFoods: {
        type: Array,
        default() {
          return [
            {
              price: 10,
              count: 1
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
      return {
        fold: true
      };
    },

    components: {MtPopup, cartControl},

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
      payClass() {
        if (this.totalPrice < this.minPrice) {
          return 'no-enough'
        } else {
          return 'enough'
        }
      },
      showCartList() {
        if (!this.totalCount > 0) {
          this.fold = true;
          return false;
        }
        let show = !this.fold;
        if(show){
          this.$nextTick(()=>{
            if(!this.scroll){
              let shopCartWrapper = document.querySelector('.cart-list-container');
              this.scroll = new BScroll(shopCartWrapper,{
                click:true
              });
            }else{
              this.scroll.refresh();
            }
          });
        }
        return show;
      }
    },

    created() {
    },

    mounted() {
    },

    methods: {
      toggleList() {
        if (!this.totalCount) {
          return;
        }
        this.fold = !this.fold;
      },
      toPay(){
        alert("给钱");
      }
    }
  }
</script>

<style>
  @import "./shopcart.css";
</style>
