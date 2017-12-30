<template>
  <span class="user-status">
    <p v-if="isLog==false">
      <router-link :to="{name: 'Login',params: {redirect}}">登录</router-link><b> | </b><a href="#">注册</a></p>
    <p v-else>Welcome <a href="#">{{uname}}</a><b> | </b><a href="javascript:;" @click="logout()">注销</a></p>
  </span>
</template>

<script>
  import { isLogin, logout } from '../../services/user.service'
  export default {
    name: 'user-status',
    data () {
      return {
        isLog: false,
        uname: '',
        redirect: 'main'
      }
    },
    mounted () {
      isLogin().then(data => {
        if (data.ok === 1) {
          this.isLog = true
          this.uname = data.uname
        } else {
          this.isLog = false
          this.uname = ''
        }
      })
    },
    methods: {
      logout: function () {
        logout()
        this.isLog = false
        this.uname = ''
      }
    }
  }
</script>

<style lang="less">
  .user-status{
    display:inline-block;
  }
</style>
