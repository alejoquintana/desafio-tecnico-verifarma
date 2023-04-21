import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

import * as movies from './movies'

export const state = () => ({
  authenticated:false
})

type RootState = ReturnType<typeof state>

export const getters = {
}

export const mutations = mutationTree(state, {
})

export const actions = actionTree(
  { state, getters, mutations },
  {
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
