<!--  -->
<template>
  <div>
    <mt-header fixed title="账户信息">
      <router-link to="/mine" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
    </mt-header>
    <div class="user-info-container">
      <mt-cell title="头像" isLink>
        <span>
          <img src="../assets/logo.png" width="40" height="40" style="border-radius: 50% 50%">
        </span>
      </mt-cell>
      <split></split>
      <mt-cell title="用户名" isLink  @click.native="modifyInfo('用户名',1)">
        <span>{{this.userName}}</span>
      </mt-cell>
      <split></split>
      <mt-cell title="手机号" isLink  @click.native="modifyInfo('手机号',2)">
        <span>{{this.tele}}</span>
      </mt-cell>
      <!--<split></split>-->
      <mt-cell title="密码" isLink  @click.native="showPopup">
        <span>{{this.pwd}}</span>
      </mt-cell>
      <split></split>
      <mt-button type="danger" size="large">退出登录</mt-button>
    </div>
    <mt-popup
      v-model="popupVisible"
      popup-transition="popup-fade" class="modify-pwd">
      <mt-field placeholder="请输入旧密码" v-model="modPwd" type="password">
        <p class="error-msg" v-show="modPwdTip">请输入正确的密码</p>
      </mt-field>
      <split></split>
      <mt-field placeholder="请输入新密码" v-model="newPwd" type="password">
        <p class="error-msg" v-show="newPwdTip">请输入正确的密码</p>
      </mt-field>
      <split></split>
      <mt-field placeholder="确认密码" v-model="repPwd" type="password">
        <p class="error-msg" v-show="repPwdTip">两次密码不一致</p>
      </mt-field>
      <split></split>
      <mt-button type="default" size="large" class="mod-btn" @click="modifyPwd">确认并保存</mt-button>
    </mt-popup>
  </div>
</template>

<script>
  import Split from '../components/split/Split.vue'
  import { MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
			  userName:'1366***5529',
        tele:'1366***5529',
        pwd:123456,
        popupVisible:false,
        newPwd:'',
        modPwd:'',
        repPwd:'',
        modPwdTip:false,
        newPwdTip:false,
        repPwdTip:false
      };
		},

		components: {
      Split
    },

		computed: {},

		created() {
		},

		mounted() {
		},

		methods: {
      modifyInfo(text,item){
        console.log("2");
        let title = '请输入新的'+ text;
        MessageBox.prompt(' ', title).then(({ value }) => {
          if (value) {
            MessageBox.confirm(`你的新${text}是 ${ value },确认修改？`).then(action =>{
              MessageBox.alert(`你的新${text}是 ${ value }`, '修改成功');
              if(item === 1){
                this.userName = value;
              }
              else if(item === 2){
                this.tele = value;
              }
            });
          }
        });
      },
      showPopup(){
        this.popupVisible = true;
      },
      checkForm(){
        let flag = true;
        if(this.modPwd != this.pwd){
          this.modPwdTip = true;
          flag = false;
        }
        if(this.newPwd !== this.repPwd){
          this.repPwdTip  = true;
          flag = false;
        }
        return flag;
      },
      modifyPwd(){
        let flag = this.checkForm();
        console.log(flag);
        if(flag){
          MessageBox.confirm('确认修改密码？').then(action =>{
            this.pwd = this.newPwd;
            this.popupVisible = false;
            this.newPwd = this.repPwd = this.modPwd = '';
          });
        }
      }
    }
	}
</script>

<style>
  @import '../common/css/userinfo.css';
</style>
