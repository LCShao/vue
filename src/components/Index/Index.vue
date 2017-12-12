<template>
  <div>
    <index-header></index-header>
    <index-navbar></index-navbar>
  </div>
</template>

<script>
  import IndexHeader from './IndexHeader/IndexHeader'
  import IndexNavbar from './IndexNavbar/IndexNavbar'
  export default {
    name: 'index',
    components: {
      IndexHeader, IndexNavbar
    }
  }
</script>

<style scoped>

</style>
