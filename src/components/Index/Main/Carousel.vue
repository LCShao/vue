<template>
  <div class="box">
    <img :src="src">
    <div v-for="i in classes.length" :class="{'shake':classes[i]}" :style="bgStyles[i]"></div>
  </div>
</template>

<script>
  import { getCarouselImgs } from '../../../services/index.service'

  export default {
    name: 'carousel',
    data () {
      return {
        i: 0,
        canShake: true,
        timer: null,
        classes: [false, false, false, false, false, false, false, false, false, false],
        src: '',
        bgStyles: [],
        imgs: null
      }
    },
    mounted () {
      var n = Math.floor(innerWidth / 100)
      for (var i = 0; i < n; i++) {
        this.classes.push(false)
      }
      getCarouselImgs().then(data => {
        this.imgs = data
        this.bgStyles = []
        for (var i = 0; i < this.classes.length; i++) {
          this.bgStyles.push({
            backgroundImage: 'url(' + require('../../../assets/' + this.imgs[this.i].img) + ')'
          })
        }
        this.src = 'src/assets/' + this.imgs[0].img
        this.timer = setInterval(this.shake.bind(this), 3000)
      })
    },
    methods: {
      shake () {
        if (this.canShake === true) {
          this.canShake = false
          this.i++
          if (this.i === this.imgs.length) this.i = 0

          var arr = (() => {
            for (var i = 0, arr = []; i < this.classes.length; i++) {
              arr.push(i)
            }
            return arr
          })()
          arr.sort((a, b) => Math.random() < 0.5 ? 1 : -1)
          arr.sort((a, b) => Math.random() < 0.5 ? 1 : -1)
          arr.sort((a, b) => Math.random() < 0.5 ? 1 : -1)

          var j = 0
          var timer = setInterval(() => {
            this.bgStyles[arr[j]] = {
              backgroundImage: 'url(' + require('../../../assets/' + this.imgs[this.i].img) + ')'
            }
            this.classes.splice(arr[j], 1, true)
            j++
            if (j === this.classes.length) clearInterval(timer)
          }, 30)
          setTimeout(() => {
            for (var i = 0; i < this.classes.length; i++) {
              this.classes.splice(i, 1, false)
            }
            this.src = 'src/assets/' + this.imgs[this.i].img
            this.canShake = true
          }, 30 * this.classes.length + 300)
        }
      }
    },
    beforeDestroy () {
      clearInterval(this.timer)
      this.timer = null
    }
  }
</script>

<style lang="less">
  .box{
    width:100%; height:380px;
    position:relative;
    div{
      width:100px; height:380px;
      position:absolute; top:0;
    }
    div:nth-child(2){
      left:0px;
      background-position:0px 0px;
    }
    div:nth-child(3){
      left:100px;
      background-position:-100px 0px;
    }
    div:nth-child(4){
      left:200px;
      background-position:-200px 0px;
    }
    div:nth-child(5){
      left:300px;
      background-position:-300px 0px;
    }
    div:nth-child(6){
      left:400px;
      background-position:-400px 0px;
    }
    div:nth-child(7){
      left:500px;
      background-position:-500px 0px;
    }
    div:nth-child(8){
      left:600px;
      background-position:-600px 0px;
    }
    div:nth-child(9){
      left:700px;
      background-position:-700px 0px;
    }
    div:nth-child(10){
      left:800px;
      background-position:-800px 0px;
    }
    div:nth-child(11){
      left:900px;
      background-position:-900px 0px;
    }
    div:nth-child(12){
      left:1000px;
      background-position:-1000px 0px;
    }
    div:nth-child(13){
      left:1100px;
      background-position:-1100px 0px;
    }
    div:nth-child(14){
      left:1200px;
      background-position:-1200px 0px;
    }
    div:nth-child(15){
      left:1300px;
      background-position:-1300px 0px;
    }
    div:nth-child(16){
      left:1400px;
      background-position:-1400px 0px;
    }
    div:nth-child(17){
      left:1500px;
      background-position:-1500px 0px;
    }
    div:nth-child(18){
      left:1600px;
      background-position:-1600px 0px;
    }
    div:nth-child(19){
      left:1700px;
      background-position:-1700px 0px;
    }
    div:nth-child(20){
      left:1800px;
      background-position:-1800px 0px;
    }
    div:nth-child(21){
      left:1900px;
      background-position:-1900px 0px;
    }
    .shake{
      animation:shake .3s ease-in-out;
    }
  }
  @keyframes shake{
    0%{top:0px}
    20%{top:120px}
    50%{top:-80px}
    65%{top:50px}
    80%{top:-25px}
    90%{top:10px}
    100%{top:0px}
  }
</style>
