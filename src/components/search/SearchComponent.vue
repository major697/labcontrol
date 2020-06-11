<template>
  <div
    class="cnt-search cnt-search__background"
    :class="{ 'cnt-search--result cnt-search__background--result': resultView }"
  >
    <div class="cnt-search__pos">
      <input
        v-model="searchText"
        type="text"
        class="cnt-search__input"
        placeholder="Search photo"
        @keyup="search"
      />
      <div v-if="loaderSearch" class="cnt-search__loader">
        <LoaderComponent :size="13" :border-size="5" />
      </div>
      <ResultComponent
        v-if="showResult && searchText.length > 2"
        :result-view="resultView"
        @openDetails="openDetails"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/search/search.scss';
</style>

<script>
import { mapActions, mapState } from 'vuex'
import { ActionsSearch } from '@/store/modules/search/types'

export default {
  name: 'SearchComponent',
  components: {
    LoaderComponent: () => import('@/components/LoaderComponent'),
    ResultComponent: () => import('@/components/search/ResultComponent'),
  },
  props: {
    resultView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      searchText: this.$route.params.query,
      showResult: false,
    }
  },
  computed: {
    ...mapState('SearchModule', {
      loaderSearch: state => state.loaderSearch,
    }),
  },
  methods: {
    ...mapActions('SearchModule', [ActionsSearch.FETCH_AUTOCOMPLITE]),
    search({ key }) {
      if (this.searchText.length > 2) {
        if (this.$route.params.query !== this.searchText) {
          this.FETCH_AUTOCOMPLITE(this.searchText)
          this.showResult = true

          if (key === 'Enter') {
            this.openDetails(this.searchText)
            this.showResult = false
          }
        }
      }
    },
    openDetails(search) {
      this.$router.push({ name: 'result', params: { query: search } })
      this.showResult = false
      this.searchText = search
    },
  },
}
</script>
