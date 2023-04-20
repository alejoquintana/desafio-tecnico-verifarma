import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  movies: '',
})

export const getters = getterTree(state, {
  movies: state => state.movies
})

export const mutations = mutationTree(state, {
  setMovies(state, payload) {
    state.movies = payload
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    initialise({ commit }) {
      //commit('setMovies')
    },
    async fetchMovies({ commit }, searchTerm) {
      //let search = `s=${searchTerm}`
      //const  res  = await this.$axios.$get(`http://www.omdbapi.com/?type=movie&${search}&${apikey}`)
      //commit('setMovies',res)
    }
  }
)
