<template>
  <span class="user-status">
    <p v-if="isLogin.ok==0"><a href="#">登录</a><b> | </b><a href="#">注册</a></p>
    <p v-else>Welcome <a href="#">xxx</a><b> | </b><a href="#">注销</a></p>
  </span>
</template>

<script>
  export default {
    name: 'user-status',
    computed: {
      isLogin () {
        return Math.random() < 0.5 ? {ok: 1, uname: 'jingjing'} : {ok: 0}
      }
    }
  }
</script>

<style lang="less">
  .user-status{
    display:inline-block;
  }
</style>
