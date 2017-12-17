<template>
  <div class="main">
    <index-navbar></index-navbar>
    <carousel></carousel>
  </div>
</template>

<script>
  import IndexNavbar from '@/components/Index/Main/IndexNavbar/IndexNavbar'
  import Carousel from '@/components/Index/Main/Carousel'
  export default {
    name: 'main',
    components: {
      IndexNavbar, Carousel
    }
  }
</script>

<style scoped>

</style>
