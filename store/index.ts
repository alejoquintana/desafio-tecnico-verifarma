import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

import * as movies from './movies'

export const state = () => ({
})

type RootState = ReturnType<typeof state>

export const getters = {
  //fullEmail: (state: RootState) => state.email,
}

export const mutations = mutationTree(state, {
  /* setEmail(state, newValue: string) {
    state.email = newValue
  }, */
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    /* async resetEmail({ commit }) {
      commit('setEmail', 'a@a.com')
    }, */
  }
)

export const accessorType = getAccessorType({
  actions,
  getters,
  mutations,
  state,
  modules: {
    movies,
  },
})
