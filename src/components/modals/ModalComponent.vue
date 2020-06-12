<template>
  <div class="modal">
    <div class="modal__wrapper">
      <div class="modal__wrapper__container">
        <div class="modal__wrapper__container__close" @click="close">
          <img src="@/assets/img/close.png" alt="" title="close modal" />
        </div>
        <slot name="header"></slot>
        <slot name="body"></slot>
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/scss/components/modals/modal.scss';
</style>

<script>
import { mapMutations } from 'vuex'
import { MutationsModal } from '@/store/modules/modal/types'

export default {
  name: 'ModalComponent',
  methods: {
    ...mapMutations('ModalModule', [MutationsModal.SET_MODAL_STATUS]),
    close() {
      this.SET_MODAL_STATUS(false)
    },
  },
}
</script>
