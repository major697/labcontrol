import Vue from 'vue'
import Vuex from 'vuex'
import SearchModule from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    SearchModule,
  },
})
