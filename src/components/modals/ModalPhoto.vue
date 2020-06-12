<template>
  <ModalComponent>
    <template v-slot:header>
      <div class="modal-photo__user">
        <img
          :src="photo.user.profile_image.small"
          class="modal-photo__user__img"
          alt="photo-user"
        />
        <div class="modal-photo__user__cnt-user">
          <a
            :href="photo.user.links.html"
            class="modal-photo__user__cnt-user__link"
            target="_blank"
            >{{ photo.user.name }}</a
          >
          <div class="modal-photo__user__cnt-user__desc">{{ photo.user.location }}</div>
        </div>
      </div>
    </template>
    <template v-slot:body>
      <div class="modal-photo__photo">
        <img :src="photo.urls.regular" class="modal-photo__photo__img" alt="image" />
      </div>
    </template>
    <template v-slot:footer>
      <div class="modal-photo__desc">
        <div class="modal-photo__desc--second">
          {{ moment(photo.created_at).format('MMMM') }}
          {{ moment(photo.created_at).format('YYYY') }}
        </div>
        <div class="modal-photo__desc__icon">
          <img src="@/assets/img/location.png" alt="" />
          {{ photo.user.location }}
        </div>
      </div>
    </template>
  </ModalComponent>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/modals/modalPhoto.scss';
</style>

<script>
import moment from 'moment'
moment.locale('pl')

export default {
  name: 'ModalPhoto',
  components: {
    ModalComponent: () => import('@/components/modals/ModalComponent'),
  },
  props: {
    photo: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      moment,
    }
  },
}
</script>
