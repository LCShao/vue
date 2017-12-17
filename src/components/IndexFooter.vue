<template>
  <footer class="index-footer">
  <div class="main">
    <div class="icon">
      <ul class="icon-list">
        <li><i></i><span>正规机构</span></li>
        <li><i></i><span>价格透明</span></li>
        <li><i></i><span>定金闪电退</span></li>
        <li><i></i><span>真实点评</span></li>
      </ul>
    </div>
    <div>
      <h3>新氧</h3>
      <p>爱漂亮才不是矫情</p>
      <p>关于变美，这儿有你想要的一切</p>
      <p>成千上万的氧气宝宝</p>
      <p>都将对你敞开心扉</p>
      <p>把讳莫如深的美丽秘密分享出来</p>
      <p>权威医生为你解答疑惑</p>
      <p>分期贷款让你不再吃土</p>
      <p>医美保险在你变美路上保驾护航</p>
    </div>
    <div>
      <h3>关于我们</h3>
      <ul class="title">
        <li><a href="">加入新氧</a></li>
        <li><a href="">新氧验证</a></li>
        <li><a href="">联系我们</a></li>
        <li><a href="">版权</a></li>
      </ul>
    </div>
    <div>
      <h3>入驻我们</h3>
      <a href=""><i class="i1"></i><span>中国整形美容协会互联网分会会员单位</span></a>
      <a href=""><i class="i2"></i><span>北京医师协会整形外科专家会诊中心</span></a>
    </div>
    <div class="conn">
      <h3>关注我们</h3>
      <img src="src/assets/img/picture/8482.png" width='87px' /><br>
      <span>关注新氧公众号</span>
      <p><i></i><b></b></p>
    </div>
  </div>
  </footer>
</template>

<script>
  export default {
    name: 'index-footer'
  }
</script>

<style lang="less">
  .index-footer {
    clear: both;
    .main {
      background: #E6F4F9;
      width: 1200px;
      margin: 50px auto;
      .icon .icon-list {
        width: 100%;
        margin-top: 20px;
        margin-left: 100px;
        clear: left;
        li {
          float: left;
          margin-left: 117px;
          color: #54E4DA;
          font-size: 14px;
          width: 160px;
          height: 60px;
          line-height: 60px;
          i {
            display: block;
            float: left;
            width: 60px;
            height: 60px;
            margin-right: 10px;
            background: url("../assets/img/images/img.png");
          }
        }
        li:nth-child(1) > i {
          background-position: 241px 0px;
        }
        li:nth-child(2) > i {
          background-position: 60px 0px;
        }
        li:nth-child(3) > i {
          background-position: 181px 0px;
        }
        li:nth-child(4) > i {
          background-position: 121px 0px;
        }
      }
      div:nth-child(1)~div{
        float:left;
        margin-left:150px;
        margin-top:50px;
        margin-bottom:50px;
      }
      div:nth-child(2){
        clear:left;
      }
      div h3{
        border-left:2px solid #54E4DA;
        font-size:16px;
        padding-left:5px;
        font-weight:normal;
        margin-bottom:10px;
      }
      div p{
        font-size:14px;
        color:#777777;
        height:16px;
        line-height:16px;
      }
      div .title li{
        height:16px;
        line-height:16px;
        font-size:14px;
        color:#777777;
      }
      div:nth-child(4) a{
        display:block;
        margin-top:10px;
        width:177px;
        height:42px;
      }
      div:nth-child(4) span{
        display:inline-block;
        width:130px;
        height:42px;
        padding-left:5px;
      }
      div:nth-child(4) i{
        display:inline-block;
        width:42px;
        height:42px;
        background:url("../assets/img/images/img.png");
        margin-bottom:-8px;
      }
      div:nth-child(4) .i1{
        background-position:325px 0px;
      }
      div:nth-child(4) .i2{
        background-position:283px 0px;
      }
      .conn>p>i,.conn>p>b{
        display:inline-block;
        width:30px;
        height:30px;
        margin-top:10px;
        background:url("../assets/img/images/img.png");
      }
      .conn p i{
        background-position:355px 0px;
      }
      .conn p b{
        margin-left:20px;
        background-position:385px 0px;
      }
    }
  }
</style>
