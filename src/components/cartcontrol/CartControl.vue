<!--  -->
<template>
  <div class="cart-control">
    <transition name="decrease-move">
      <div class="cart-decrease" v-show="food.count>0" @click="decreaseCart">
        <img src="./img/remove.svg" width="24" height="24">
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add" @click="addCart">
      <img src="./img/addBig.svg" width="24" height="24">
    </div>
    <div class="ball-container">
      <transition name="ball=drop">
        <div v-for="ball in balls" v-show="ball.show" class="ball">
          <div class="shop-cart-ball-inner"></div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
  var log = console.log;
  import Vue from 'vue';
	export default {
	  props:{
	    food:{
	      type:Object
      }
    },
		data() {
			return {
			  balls:[
          {
            show:false
          },
          {
            show:false
          },
          {
            show:false
          },
          {
            show:false
          },
          {
            show:false
          },
        ]
      };
		},

		components: {},

		computed: {},

		created() {
//	    log(this.food);
		},

		mounted() {
		},

		methods: {
      addCart(){
        if(!this.food.count){
          Vue.set(this.food,'count',1);
        }else{
          this.food.count++;
        }
      },
      decreaseCart(){
        if(this.food.count){
          this.food.count--;
        }
      }
    }
	}
</script>

<style>
@import "cartControl.css";
</style>
