<template>
  <div class="cnt">
    <SearchComponent />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/home.scss';
</style>

<script>
import SearchComponent from '@/components/search/SearchComponent'

export default {
  name: 'HomeView',
  components: {
    SearchComponent,
  },
}
</script>
