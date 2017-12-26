<template>
  <div class="doc-info">
    <div class="doc-info-left">
      <ul class="doc-left-body doc-infor">
        <li v-for="(d,i) in doctors" :class="[d.dir=='h'?'h':'v']">
          <span class="doc-info-cover"></span>
          <a href="#">
            <img :src="d.pic" alt="">
            <p>
              <span>{{d.doctor_name}}</span><br/>
              <span>{{d.title}}</span><br/>
              <span>{{d.qualify}}</span>
            </p>
          </a>
          <b></b>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { queryDoctor } from '@/services/doctor.service'

  export default {
    name: 'doctor-info',
    data () {
      return {
        doctors: null
      }
    },
    mounted () {
      queryDoctor().then(result => {
        for (var d of result.data) {
          d.dir = Math.random() < 0.5 ? 'h' : 'v'
          d.pic = `/static/${d.pic}`
        }
        this.doctors = result.data
      })
    }
  }
</script>

<style lang="less">
  .doc-info{
    width:40%;
    height:500px;
    .doc-info-left{
      float:left;
      width:100%;
      height:500px;
      .doc-left-body{
        color:#fff;
        width: 100%;
        margin: 0 auto;
        height:450px;
        overflow:hidden;
        display:block;
        justify-content: space-between;
        flex-wrap:wrap;
        img{
          display: block;
          float: left;
          width: 66px;
          height: 66px;
          border-radius: 50%;
          margin-left: 20px;
        }
        li{
          width: 30%;
          height: 145px;
          float:left;
          padding: 28px 0;
          position: relative;
          perspective:1000px;/*视距*/
          transform-style:preserve-3d;/*让父元素变为3d效果的容器*/
          a{
            position:absolute;
            left:50%; top:50%;
            margin-left:-33px; margin-top:-33px;
            z-index:10;
            display:inline-block;
            width:66px; height:66px;
            transform:rotateY(0deg);
            transform-style:preserve-3d;
            transition:all .5s linear;
            perspective:1000px;/*视距*/
            img{
              transform:translateZ(5px);
            }
            p{text-align:center; font-size:.8em}
            span:nth-child(2){
              color: #9f9f9f;
              line-height: 16px;
              font-size: 12px;
            }
          }
          a>*,a+b{
            border-radius: 50%;
            width:66px; height:66px;
            position:absolute;
            top:50%;left:50%;
            margin-left:-33px;
            margin-top:-33px;
          }
          a+b{
            background:gray;
            opacity:.2;
            transform:translateY(43px) scaleY(.1);
            transition:all .5s linear;
          }
        }
        li.h>a:hover{
          transform:rotateY(180deg);
        }
        li.h>a>p{
          background:#f8f8f8;
          transform:translateZ(-5px) rotateY(180deg);
        }
        li.h>a:hover+b{
          transform:translateY(43px) scaleY(.1) rotateY(180deg);
        }

        li.v>a:hover{
          transform:rotateX(180deg);
        }
        li.v>a>p{
          background:#f8f8f8;
          transform:translateZ(-5px) rotateY(180deg) rotateZ(180deg);
        }
        li.v>a:hover+b{
          animation:v_rotate .5s;
        }
        .doc-info-cover{
          width: 100%;
          height: 100%;
          background:rgba(0,0,0,0.1);
          opacity:0.1;
          position:absolute;
          top:0;
          left:0;
          border:1px solid #9f9f9f;
        }
      }
    }
  }
  @keyframes v_rotate{
    0%{transform:translateY(43px) scaleY(.1)}
    50%{transform:translateY(43px) scaleY(.2)}
    100%{transform:translateY(43px) scaleY(.1)}
  }
</style>
