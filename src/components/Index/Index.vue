<template>
  <div>
    <index-header></index-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import IndexHeader from '@/components/Index/IndexHeader/IndexHeader'
  export default {
    name: 'index',
    components: {
      IndexHeader
    }
  }
</script>

<style scoped>

</style>
