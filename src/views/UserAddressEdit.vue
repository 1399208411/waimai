<!--  -->
<template>
  <div>
    <mt-header fixed title="编辑收货地址">
      <router-link to="/useraddress" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button slot="right" @click="checkDel">删除</mt-button>
    </mt-header>
    <div class="edit-content">
      <mt-field label="联系人" placeholder="请输入用户名" class="form-item" v-model="address.name"></mt-field>
      <mt-radio class="form-item"
        v-model="address.sex"
        :options="['先生', '女士']">
      </mt-radio>
      <mt-field label="电话" placeholder="请输入电话" class="form-item" v-model="address.tel"></mt-field>
      <mt-field label="位置" placeholder="请输入位置" class="form-item" v-model="address.place"></mt-field>
      <mt-field label="详细地址" placeholder="请输入地址" type="textarea" class="form-item" v-model="address.address"></mt-field>
      <mt-button class="edit-btn" size="large" @click="checkEdit">确定</mt-button>
    </div>
  </div>
</template>

<script>
  import { MessageBox } from 'mint-ui';
  export default {
    data() {
      return {
        address:{
          name:"李佳远",
          sex:"先生",
          tel:"66666666",
          place:"仲恺农业工程学院",
          address:"广东省理发师海珠区纺织路东沙街24号8栋学生宿舍112房"
        }
      };
    },

    components: {},

    computed: {},

    created() {
    },

    mounted() {
    },

    methods: {
      checkDel(){
        MessageBox.confirm('确定删除当前地址?').then(action => {

        });
      },
      checkEdit(){
        console.log(this.address.sex);
        MessageBox.confirm('确定修改当前数据?').then(action => {

        });
      }
    }
  }
</script>

<style>
  .edit-content {
    position: fixed;
    top: 40px;
    width: 100%;
    height: 100%;
    text-align: left;
    background: rgba(27, 27, 27, 0.1);
  }
  .edit-content .form-item{
    border-bottom: solid 0.5px rgba(27, 27, 27, 0.1);
  }
  .form-item .mint-radiolist-title{
    margin: 0;
  }
  .edit-content .mint-radiolist{
    width: 100%;
    display: flex;
  }
  .edit-content .mint-radiolist .mint-cell {
    padding: 0;
    width: 50%;
    margin: auto;
    /*text-decoration-color: white;*/
  }
  .edit-btn{
    margin-top: 2em;
    background-color: #00c850;
    color: white;
    font-weight: 700;
    font-size: 1.5rem;
  }
</style>
