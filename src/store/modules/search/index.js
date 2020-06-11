import { ActionsSearch, MutationsSearch, GettersSearch } from './types'
import { autocomplete, search } from '@/services/api/unsplash'

export default {
  namespaced: true,
  strict: true,
  state: {
    resultAutocomplete: [],
    resultSearch: [],
    loader: false,
    loaderSearch: false,
  },
  actions: {
    async [ActionsSearch.FETCH_AUTOCOMPLITE]({ commit, state }, payload) {
      state.loaderSearch = true
      try {
        const { data } = await autocomplete(payload)
        commit(MutationsSearch.SET_AUTOCOMPLITE, data.autocomplete)
        state.loaderSearch = false
      } catch (error) {
        console.error(error)
        state.loaderSearch = false
      }
    },
    async [ActionsSearch.FETCH_SEARCH_UNSPLASH]({ commit, state }, payload) {
      state.loader = true
      state.resultAutocomplete = []
      try {
        const { data } = await search(payload)
        commit(MutationsSearch.SET_SEARCH_UNSPLASH, data.results)
        state.loader = false
      } catch (error) {
        console.error(error)
        state.loader = false
      }
    },
  },
  mutations: {
    [MutationsSearch.SET_AUTOCOMPLITE](state, payload) {
      state.resultAutocomplete = payload
    },
    [MutationsSearch.SET_SEARCH_UNSPLASH](state, payload) {
      state.resultSearch = payload
    },
  },
  getters: {
    [GettersSearch.GET_SEARCH_LOADER](state) {
      return state.loader
    },
  },
}
