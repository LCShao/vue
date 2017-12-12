<template>
  <div class="ulbg">
    <ul class="banner-ul">
      <li class="selected"><a href="#">首页</a></li>
      <li><a href="#">直播</a></li>
      <li><a href="dairy-main.html">美丽日记</a></li>
      <li><a href="safe-shopping.html">安心购</a></li>
      <li><a href="#">医院</a></li>
      <li><a href="query-doctors.html">医生</a></li>
      <li><a href="#">圈子</a></li>
      <li><a href="#">项目宝典</a></li>
      <li><a href="#">云诊所</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ulbg'
  }
</script>

<style lang="less">
  .ulbg{
    background:-webkit-linear-gradient(left,#80BFFE,#4FF0C8);
    width:100%;
    height:50px;
    .banner-ul{
      z-index:50;
      .selected{
        background:#70B1E2;
      }
    }
  }
</style>
