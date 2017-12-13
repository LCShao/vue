<template>
  <div class="main">
  <h3>首页内容Main</h3>
    <index-navbar></index-navbar>
    <carousel></carousel>
  </div>
</template>

<script>
  import IndexNavbar from './IndexNavbar/IndexNavbar'
  import Carousel from './Carousel'
  export default {
    name: 'main',
    components: {
      IndexNavbar, Carousel
    }
  }
</script>

<style scoped>

</style>
