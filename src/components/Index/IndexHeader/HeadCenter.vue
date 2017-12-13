<template>
  <div class="headCenter">
    <div class="sbox">
      <i></i>
      <input type="text"/>
      <a>搜索</a>
    </div>
    <ul>
      <li><span>大家都在搜:</span></li>
      <li><a href="#">微整不动刀</a></li>
      <li><a href="#">大牌名医</a></li>
      <li><a href="#">玻尿酸</a></li>
      <li><a href="#">水光针</a></li>
      <li><a href="#">祛眼袋</a></li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'head-center'
  }
</script>

<style lang="less">
  .headCenter{
    ul{
      margin-top:10px;
      li{
        float:left;
        margin-left:5px;
        a,span{
          font-size:14px;
          color:#9B9B9B;
        }
      }
    }
    .sbox{
      width:382px;
      height:32px;
      border-radius:30px;
      border:1px solid #2CC7C5;
      margin-top:40px;
      i{
        display:block;
        float:left;
        width:16px;
        height:16px;
        background:url("../../../assets/img/images/img.png");
        background-position:-114px 0px;
        margin:8px;
      }
      input{
        border:none;
        outline:none;
        height:30px;
        width:290px;
      }
      a{
        display:block;
        float:right;
        margin-top:7px;
        margin-right:5px;
        padding-left:2px;
        height:20px;
        width:50px;
        border-left:1px solid #2CC7C5;
        background:#fff;
        font-size:14px;
        color:#2CC7C5;
        &:hover{
          cursor:pointer;
        }
      }
    }
  }
</style>
