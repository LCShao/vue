<template>
  <div class="navall">
    <h3>我是IndexNavbar</h3>
    <u-l-b-g></u-l-b-g>
    <side-bar></side-bar>
  </div>
</template>

<script>
  import ULBG from './ULBG'
  import SideBar from './SideBar'
  export default {
    name: 'index-navbar',
    components: {
      ULBG, SideBar
    }
  }
</script>

<style lang="less">
  .navall{
    width:100%;
    margin:0 auto;
    position:relative;
    ul{
      width:960px;
      height:50px;
      margin:0 auto;
      position:absolute;
      top:0px;
      left:145px;
      background:-webkit-linear-gradient(left,#80BFFE,#4FF0C8);
      li{
        float:left;
        font-size:18px;
        font-weight:normal;
        height:50px;
        line-height:50px;
        width:106px;
        text-align:center;
        transition:all .5s linear;
        &:hover{
          background:#70B1E2;
        }
        a{
          color:white;
          text-decoration:none;
        }
      }
    }
  }
</style>
