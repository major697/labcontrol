<template>
  <div class="photos">
    <div class="photos__lists">
      <div v-for="photos in resultSearch" :key="photos.id" class="photos__lists__list">
        <img :src="photos.urls.small" class="photos__lists__list__img" />
        <span class="photos__lists__list__date">{{
          moment(photos.created_at).format('DD.MM.YYYY')
        }}</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/photos/listPhotos.scss';
</style>

<script>
import { mapState } from 'vuex'
import moment from 'moment'

export default {
  name: 'ListPhotosComponent',
  data() {
    return {
      moment,
    }
  },
  computed: {
    ...mapState('SearchModule', {
      resultSearch: state => state.resultSearch,
    }),
  },
}
</script>

<style lang="scss" scoped></style>
