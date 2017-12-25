<template>
  <div class="main">
    <index-navbar></index-navbar>
    <carousel></carousel>
    <div class=".floor1">
      <doctor-info></doctor-info>
    </div>
  </div>
</template>

<script>
  import IndexNavbar from '@/components/Index/Main/IndexNavbar/IndexNavbar'
  import Carousel from '@/components/Index/Main/Carousel'
  import DoctorInfo from '@/components/Index/Main/DoctorInfo'

  export default {
    name: 'main',
    components: {
      IndexNavbar, Carousel, DoctorInfo
    }
  }
</script>

<style lang="less">
  .main{ position: relative; }
  .floor1{
    width:1240px;
    margin:0 auto;
    text-align:center;
    margin-top:20px;
    display:flex;
    justify-content: space-between;
  }
</style>
