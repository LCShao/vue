<template>
  <div class="headCenter">
    <div class="sbox">
      <i></i>
      <ul class="shelper" v-if="show">
        <li v-for="(d,i) in pList" :data-product_id="d.product_id" :title="d.kword+d.title" :class="{'hover':isHover[i]}">
          <div class="search-item" :title="d.kword+d.title"><span>{{d.kword+d.title}}</span><b>预约: {{d.yy_count}}</b></div>
        </li>
      </ul>
      <input type="text" v-model="kw" @keyup="search($event)" @focus="search()" @blur="hide()"/>
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
  import { searchHelper } from '@/services/header.service'

  export default {
    name: 'head-center',
    data () {
      return {
        pList: [],
        kw: '',
        show: false,
        isHover: []
      }
    },
    methods: {
      loadSHelper () {
        searchHelper(this.kw).then(data => {
          console.log(data)
          if (data.length > 0) this.show = true
          this.pList.length = 0
          this.pList.splice(0, 0, ...data)
          this.isHover = []
          for (var i = 0; i < data.length; i++) {
            this.isHover.push(false)
          }
        })
      },
      search (e) {
        if (e !== undefined) {
          switch (e.keyCode) {
            case 38:
              if (this.isHover.indexOf(true) === -1) {
                this.isHover.splice(this.pList.length - 1, 1, true)
              } else if (this.isHover[0] === true) {
                this.isHover.splice(0, 1, false)
                this.isHover.splice(this.pList.length - 1, 1, true)
                console.log(this.isHover[0], this.isHover[1])
              } else {
                var i = this.isHover.indexOf(true)
                this.isHover.splice(i, 1, false)
                this.isHover.splice(i - 1, 1, true)
              }
              break
            case 40:
              if (this.isHover.indexOf(true) === -1) {
                this.isHover.splice(0, 1, true)
              } else if (this.isHover[this.isHover.length - 1] === true) {
                this.isHover.splice(this.isHover.length - 1, 1, false)
                this.isHover.splice(0, 1, true)
              } else {
                let i = this.isHover.indexOf(true)
                this.isHover.splice(i, 1, false)
                this.isHover.splice(i + 1, 1, true)
              }
              break
            case 13:
              console.log('跳')
              if (this.isHover.indexOf(true) === -1) {
                this.$router.push({name: 'SafeShopping', query: { kw: this.kw }})
              } else {
                let i = this.isHover.indexOf(true)
                let pid = this.pList[i].product_id
                this.$router.push({name: 'ProductDetails', query: { pid }})
              }
              break
            default:
              this.loadSHelper()
          }
        }
      },
      hide () {
        this.show = false
      }
    }
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
      position:absolute;
      i{
        display:block;
        float:left;
        width:16px;
        height:16px;
        background:url("/static/img/images/img.png");
        background-position:-114px 0px;
        margin:8px;
      }
      .shelper{
        left: 320px;
        width: 500px;
        overflow: hidden;
        position: absolute;
        z-index: 100;
        left: -1px;
        top: 36px;
        border: 1px solid #ccc;
        background-color: #fff;
        box-shadow: 1px 2px 1px rgba(0,0,0,.2);
        list-style-type: disc;
        li{
          overflow: hidden;
          padding: 1px 6px;
          line-height: 24px;
          cursor: pointer;
          .search-item{
            color: #005AA0;
            float: left;
            width: 100%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            b{
              display:inline-block;
              float:right;
            }
          }
        }
        li:hover,li.hover{
          background: #f5f5f5;
        }
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
