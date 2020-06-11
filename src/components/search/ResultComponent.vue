<template>
  <ul class="result-list">
    <li
      v-for="result in resultAutocomplete"
      :key="result.query"
      class="result-list__list"
      :class="{ 'result-list--result': resultView }"
      @click="$emit('openDetails', result.query)"
    >
      {{ result.query }}
    </li>
    <li v-show="noResult" class="result-list__list result-list__list--empty">
      No result.
    </li>
  </ul>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/search/resultSearch.scss';
</style>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ResultComponent',
  props: {
    resultView: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      noResult: false,
    }
  },
  computed: {
    ...mapState('SearchModule', {
      resultAutocomplete: state => state.resultAutocomplete,
    }),
  },
  watch: {
    resultAutocomplete(newValue) {
      this.noResult = false
      if (!newValue.length) {
        this.noResult = true
      }
    },
  },
}
</script>
