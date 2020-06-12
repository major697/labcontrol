import { MutationsModal } from './types'

export default {
  namespaced: true,
  strict: true,
  state: {
    openModal: false,
  },
  mutations: {
    [MutationsModal.SET_MODAL_STATUS](state, payload) {
      state.openModal = payload
    },
  },
}
