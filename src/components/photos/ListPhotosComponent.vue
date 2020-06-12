<template>
  <div class="photos">
    <div v-if="resultSearch.length" class="photos__lists">
      <div
        v-for="photo in resultSearch"
        :key="photo.id"
        class="photos__lists__list"
        @click="openPhoto(photo)"
      >
        <img :src="photo.urls.regular" class="photos__lists__list__img" />
        <span class="photos__lists__list__date">{{
          moment(photo.created_at).format('DD.MM.YYYY')
        }}</span>
      </div>
    </div>
    <div v-else class="photos__empty">
      Can't find photos.
    </div>
    <ModalPhoto v-if="openModal" :photo="openedPhoto" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/photos/listPhotos.scss';
</style>

<script>
import { mapState, mapMutations } from 'vuex'
import moment from 'moment'
import { MutationsModal } from '@/store/modules/modal/types'

export default {
  name: 'ListPhotosComponent',
  components: {
    ModalPhoto: () => import('@/components/modals/ModalPhoto'),
  },
  data() {
    return {
      moment,
      openedPhoto: null,
    }
  },
  computed: {
    ...mapState('SearchModule', {
      resultSearch: state => state.resultSearch,
    }),
    ...mapState('ModalModule', {
      openModal: state => state.openModal,
    }),
  },
  methods: {
    ...mapMutations('ModalModule', [MutationsModal.SET_MODAL_STATUS]),
    openPhoto(photo) {
      this.openedPhoto = photo
      this.SET_MODAL_STATUS(true)
    },
  },
}
</script>
