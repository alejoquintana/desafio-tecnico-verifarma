const apikey = "apikey=24bb037b";

import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
  movies: [
    {title: "Undefined",year: "2006",imdbID: "tt1436480",type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMTgzNzkxMzk5Nl5BMl5BanBnXkFtZTgwMTQ2MzA2MDE@._V1_SX300.jpg"},
    {title: "The Undefined",year: "2013",imdbID: "tt3271334",type: "movie",poster: "N/A"},
    {title: "A Love Undefined",year: "2016",imdbID: "tt4955578",type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMDNmNDUwZGEtYmMxZS00NzU5LWEyMGMtOTRhNjBkNWNjNjMwXkEyXkFqcGdeQXVyNzA5MzMzNjk@._V1_SX300.jpg"},
    {title: "Artist Undefined",year: "2015",imdbID: "tt5190590",type: "movie",poster: "N/A"},
    {title: "Undefined",year: "2014",imdbID: "tt5581814",type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BYTk1OTcwYTQtMmEyNS00OWFiLTlmOWYtZGQ1ZDczNjc3MWFkXkEyXkFqcGdeQXVyMTAwMjMyOTE@._V1_SX300.jpg"},
    {title: "Undefined: A Muslim-American Musical",year: "2017",imdbID: "tt7178924",type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BODMwYTE1ZGMtMDk5Zi00ZTExLTk3MjUtMDk1NTk5Njk0ZmZhXkEyXkFqcGdeQXVyNzI4NTUyNjE@._V1_SX300.jpg"},
    {title: "Beautiful UnDefined",year: "2017",imdbID: "tt7639764",type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BOWIwNDMzZDQtYTg1OC00ODBjLTkxZWItMzgzMzZiNjIzZGI0XkEyXkFqcGdeQXVyODIwODk5Njc@._V1_SX300.jpg"},
    {title: "Destiny Undefined",year: "2009",imdbID: "tt9343638",type: "movie",poster: "N/A"},
    {title: "Life Undefined",year: "2020",imdbID: "tt10229024",type: "movie",
    poster: "https://m.media-amazon.com/images/M/MV5BMWZmMzY5MjctMWVmMS00OTljLTgxYjgtZDhlNjYwNWJhNzRjXkEyXkFqcGdeQXVyNjExMDY4NTE@._V1_SX300.jpg"},
    {title: "Girl Undefined",year: "2019",imdbID: "tt11758836",type: "movie",poster: "N/A"}
  ],
})

export const getters = getterTree(state, {
  getMovies: state => state.movies
})

export const mutations = mutationTree(state, {
  setMovies(state, payload) {
    state.movies = payload
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchMovies({ commit }, searchTerm) {
      var res
      try {
        let search = searchTerm ? '' :`&s=${searchTerm}`
        //res  = await this.$axios.$get(`http://www.omdbapi.com/?type=movie${search}&${apikey}`)
      } catch (error) {
        console.error(error)
      }
      //commit('setMovies',res)
    }
  }
)
