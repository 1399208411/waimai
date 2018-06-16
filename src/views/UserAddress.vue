<!--  -->
<template>
  <div>
    <mt-header fixed title="我的地址">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="mine-address-list">
      <ul>
        <li v-for="(user,index) in addressList">
          <div class="address-item-content">
            <div class="address-content">
              <p class="address-title">
                <span class="name">{{user.name}}</span>
                <span class="sex">{{user.sex}}</span>
                <span class="tel">{{user.tel}}</span>
              </p>
              <p class="address">{{user.address}}</p>
            </div>
            <div class="address-edit" @click="edit(user)">
              <img src="../assets/logo.png" width="20" height="20">
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
			  addressList:[
          {
            name:"李佳远",
            tel:"13658954566",
            sex:"先生",
            place:"仲恺农业工程学院",
            address:"广东省理发师海珠区纺织路东沙街24号8栋学生宿舍112房"
          },
          {
            name:"林昭铭",
            tel:"13658954566",
            sex:"先生",
            place:"仲恺农业工程学院",
            address:"广东省理发师海珠区纺织路东沙街24号8栋学生宿舍112房"
          },
          {
            name:"郭钟旭",
            tel:"13658954566",
            sex:"先生",
            place:"仲恺农业工程学院",
            address:"广东省理发师海珠区纺织路东沙街24号8栋学生宿舍112房"
          }
        ]
      };
		},

		components: {},

		computed: {},

		created() {
		},

		mounted() {
		},

		methods: {
		  edit(user){
        this.$router.push({
          path:'/useraddress/edit',
          query:{
            name:`${user.name}`
          }

        })
      }
    }
	}
</script>

<style>
@import '../common/css/address.css';
</style>
