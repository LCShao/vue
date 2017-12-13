<template>
  <div class="index-header">
    <div class="headTop">
      <user-status></user-status>
      <ul class="topr">
        <li>
          <a href="#">
            <i class="i1"></i>
            <span>认证为医生</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="i2"></i>
            <span>注册为医院账号</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="i3"></i>
            <span>联系我们</span>
          </a>
        </li>
        <li>
          <a href="#">
            <i class="i4"></i>
            <span>新氧APP</span>
          </a>
        </li>
      </ul>
    </div>
    <div class="head">
      <img :src="logo"/>
      <head-center></head-center>
      <div class="conr">
        <i></i>
        <p>中国整形美容协会<br>
          互联网分会会员单位</p>
        <strong>整形有风险 决策需谨慎</strong>
      </div>
    </div>
  </div>
</template>

<script>
  import UserStatus from '@/components/User/UserStatus'
  import HeadCenter from '@/components/Index/IndexHeader/HeadCenter'
  export default {
    name: 'index-header',
    data () {
      return {
        logo: './assets/img/logo.png'
      }
    },
    components: {
      UserStatus, HeadCenter
    }
  }
</script>

<style lang="less">
  .index-header{
    background:#fff;
    width:100%;
    /*head-top样式*/
    .headTop{
      height:30px;
      width:100%;
      border:1px solid transparent;
      background:#F3F7F7;
      font-size:12px;
      padding:0 100px;
      .topr{
        float:right;
        margin-right:200px;
        li{
          float:left;
          margin-left:50px;
          a{
            display:inline-block;
            height:30px;
            line-height:30px;
            i{
              display:inline-block;
              width:14px;
              height:15px;
              margin-bottom:-3px;
              background-image:url("../../../assets/img/images/img.png");
            }
            .i1{
              background-position:-55px -1px;
            }
            .i2{
              background-position:-41px -1px;
            }
            .i3{
              background-position:-130px 0px;
              width:17px;
              height:17px;
            }
            .i4{
              width:9px;
              height:13px;
              background-image:url("../../../assets/img/images/xyapp.png");
            }
            span{
              margin-left:30px;
              display:inline-block;
              height:30px;
              line-height:30px;
            }
          }
        }
      }

    }
    /*head样式*/
    .head{
      width:100%;
      height:116px;
      display:flex;
      justify-content:space-between;
      flex-wrap:nowrap;
      .conr {
        width: 200px;
        margin-top: 35px;
        i{
          display:inline-block;
          float:left;
          width:42px;
          height:42px;
          background:url("../../../assets/img/images/img.png");
          background-position:-249px 0px;
        }
        p{
          float:left;
          margin-top:10px;
          font-size:14px;
          color:#3985A0;
        }
        strong{
          display:block;
          clear:left;
          font-size:16px;
          color:#FF527F;
          margin-left:5px;
        }
      }

    }
  }
</style>
