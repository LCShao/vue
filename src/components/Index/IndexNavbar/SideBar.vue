<template>
  <div class="sidebar">
    <ul>
      <li v-for="(skill,i) in skills" :class="{'hover':skill.isHover}" @mouseenter="liSkillEnter(i)" @mouseleave="liSkillLeave(i)">
        <a href="#">
          <i></i>
          <span>{{skill.skill_name}}</span>
        </a>
        <div class="desc">
          <div v-for="sub in skill.skill_subs">
            <h4>{{sub.title}}</h4>
            <hr>
            <p>
              <a href="#" v-for="cont in sub.content">{{cont}}</a>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import { getAllSkills } from '../../../services/index.service'

  export default {
    name: 'side-bar',
    data () {
      return {
        skills: {}
      }
    },
    mounted () {
      getAllSkills().then(data => {
        this.skills = data
      })
    },
    methods: {
      liSkillEnter (i) {
        this.skills[i].isHover = true
      },
      liSkillLeave (i) {
        this.skills[i].isHover = false
      }
    }
  }
</script>

<style lang="less">
  /*sidebar的样式*/
  .sidebar{
    position:absolute;
    z-index:10;
    top:50px;
    ul{
      background:#fff;
      width:200px;
      height:380px;
      position:relative;
      li{
        height:38px;
        line-height:38px;
        width:200px;
        font-size:16px;
        background:white;
        transition:all 0.3s linear;
        a{
          z-index:10;
          i{
            display:block;
            float:left;
            width:26px;
            height:26px;
            margin:0 8px;
            margin-top:5px;
            background:url("../../../assets/img/images/menu_i_bg_new.png");
          }
          span{
            display:inline-block;
            color:#333;
            float:left;
          }
        }
        .desc{
          text-align:left;
          padding:0px;
          z-index:0;
          height:390px;
          position:absolute;
          top:0px;
          background:#fff;
          left:160px;
          opacity:0;
          width:0; overflow:hidden;
          transition:opacity .5s linear,
                    left .5s linear;
          h4~h4{
            margin-top:20px;
            color:gray;
          }
          a{
            display:inline-block;
            color:gray;
          }
          hr{
            margin:0 10px;
          }
          p{
            a{
              margin:0 10px;
              &:hover{
                color:#333;
              }
            }
          }
        }
        &:hover{
          padding-left:10px;
          width:190px;
        }
      }
      li.hover{
        padding-left:10px;
        width:190px;
        .desc {
          text-align: left;
          left: 180px;
          padding: 10px;
          width: 400px;
          opacity: 1;
        }
      }
      li:nth-child(1)>a>i{
        background-position:0px 104px;
      }
      li:nth-child(2)>a>i{
        background-position:0px 77px;
      }
      li:nth-child(3)>a>i{
        background-position:0px 260px;
      }
      li:nth-child(4)>a>i{
        background-position:0px 234px;
      }
      li:nth-child(5)>a>i{
        background-position:0px 313px;
      }
      li:nth-child(6)>a>i{
        background-position:0px 210px;
      }
      li:nth-child(7)>a>i{
        background-position:0px 185px;
      }
      li:nth-child(8)>a>i{
        background-position:0px 261px;
      }
      li:nth-child(9)>a>i{
        background-position:0px 157px;
      }
      li:nth-child(10)>a>i{
        background-position:0px 131px;
      }
    }
  }
</style>
