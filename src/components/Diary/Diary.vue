<template>
  <div>
  <h3>我是Diary</h3>
    <diary-header></diary-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import DiaryHeader from '@/components/Diary/DiaryHeader/DiaryHeader'
  export default {
    name: 'diary',
    components: {
      DiaryHeader
    }
  }
</script>

<style scoped>

</style>
