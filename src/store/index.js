import Vuex from 'vuex'
import Vue from 'vue'
import state from './state.js'
import mutations from './mutations.js'
import getters from './getters.js'
import actions from './action.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

// const store = new Vuex.Store({
//     state: {
//       count: 0
//     },
//     mutations: {
//       increment (state) {
//         state.count++
//       }
//     }
//   })