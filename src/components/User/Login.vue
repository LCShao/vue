<template>
  <div class="main">
    <section>
      <div>
        <img :src="loginBg">
        <div class="login">
          <p>
            <span>登录<b>Angila</b></span>
            <a href="#" class="rt">新用户注册</a>
          </p>
          <input id="uname"  v-model="uname" placeholder="请输入您的用户名">
          <input type="password" id="upwd"  v-model="upwd" value="123456" placeholder="请输入您的密码">
          <div class="login_auto">
            <input type="checkbox" value="0" /><span class="lt" >自动登录</span>
            <a href="#"><span class="rt" >忘记密码？</span></a>
            <button class="btn" @click="login()">登&nbsp;&nbsp;录</button>
            <!--<input type="button"  value="登陆">-->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { login } from '../../services/user.service'
  export default {
    name: 'login',
    data () {
      return {
        loginBg: 'src/assets/img/login/loginbg.jpg',
        uname: 'jingjing',
        upwd: '123456',
        error: '',
        redirect: ''
      }
    },
    mounted () {
      this.redirect = this.$router.currentRoute.query.redirect
    },
    methods: {
      login: function () {
        login(this.uname, this.upwd).then(data => {
          if (data.code === 1) {
            this.$router.push(this.redirect)
          } else {
            alert(data.msg)
            this.uname = ''
            this.upwd = ''
          }
        })
      }
    }
  }
</script>

<style lang="less">
  .main{
    width:100%;
    margin:0 auto;
    /*section 部分*/
    section>div{
      position:relative;
      overflow:hidden;
      img{
        transition: all .3s linear;
        width:100%;
        margin:0 auto;
        opacity:0.8;
      }
      img:hover{
        opacity:1;
        transform:scale(1.1);
      }
      .login{
        background:rgba(0,0,0,0.2);
        width:280px;
        height:297px;
        border-radius:3px;
        position:absolute;
        top:90px;
        right:80px;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        box-sizing:border-box;
        p,a,span{
          font-size: 14px;
          color:#fff;
        }
        p>a:hover{
          color:#EA889F;
        }
        p:nth-child(1) {
          padding:20px 10px;
          border-bottom:1px solid #fff;
        }
        p span b{
          color:#D2607A;
          font-size:16px;
          margin-left:5px;
        }
        input{
          border:none;
          outline:none;
          border-radius:3px;
          padding:15px 10px;
          margin:0 10px;
        }
        button.btn{
          display:block;
          height:35px;
          line-height:35px;
          text-align:center;
          padding:5px 0;
          width:260px;
          border-radius:3px;
          margin:0 10px;
          background:rgba(210,96,122,0.6);
          font-size:20px;
          margin-top:10px;
          border:none;
          outline:none;
          color:#fff;
          &:hover{
            background:rgba(210,96,122,0.8);
            color:#fff;
          }
        }
        div.login_auto{
          padding:10px  0;
          span.rt{
            margin-right:10px;
          }
          span.lt{
            padding:10px 0;
          }
        }
      }
    }
  }
</style>
