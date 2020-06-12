<template>
  <div class="cnt-result">
    <SearchComponent :result-view="true" />
    <div class="cnt-result__title">
      {{ $route.params.query }}
    </div>
    <div v-if="loader" class="cnt-result__loader">
      <LoaderComponent :size="120" :border-size="16" />
    </div>
    <ListPhotosComponent v-else />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/views/resultSearch.scss';
</style>

<script>
import { mapActions, mapState } from 'vuex'
import { ActionsSearch } from '@/store/modules/search/types'
import SearchComponent from '@/components/search/SearchComponent'

export default {
  name: 'ResultSearchView',
  components: {
    SearchComponent,
    LoaderComponent: () => import('@/components/LoaderComponent'),
    ListPhotosComponent: () => import('@/components/photos/ListPhotosComponent'),
  },
  computed: {
    ...mapState('SearchModule', {
      loader: state => state.loader,
      resultSearch: state => state.resultSearch,
    }),
  },
  watch: {
    $route() {
      this.searchPhotos()
    },
  },
  created() {
    this.searchPhotos()
  },
  methods: {
    ...mapActions('SearchModule', [ActionsSearch.FETCH_SEARCH_UNSPLASH]),
    searchPhotos() {
      this.FETCH_SEARCH_UNSPLASH(this.$route.params.query)
    },
  },
}
</script>
