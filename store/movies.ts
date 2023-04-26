const apikey = "apikey=24bb037b";
import { getterTree, mutationTree, actionTree } from 'typed-vuex'
import Movie from "@/modules/Movie";
import FullMovie from "@/modules/FullMovie";


export const state = () => ({
	heros: ['batman', 'superman', 'spider-man'],
	movies: [] as Array<Movie>,
	fullMovies: [] as Array<FullMovie>,
	movieSelectedID: '' as string,
  loaded: false
})

export const getters = getterTree(state, {
	getMovieSelected : (state) => (imdbID:string) => {
		let res = state.fullMovies.find((movie)=>{
			return movie.imdbID == imdbID
		})
		return res
	},
})

export const mutations = mutationTree(state, {
  setMovies(state, payload) {
    state.movies = payload
  },
	pushFullMovie(state, payload) {
		state.fullMovies.push(payload)
	},
	pushMovie(state, payload) {
		state.movies.push(payload)
	},
	concatMovie(state, payload) {
		state.movies = state.movies.concat(payload)
	},
	setLoaded(state, payload) {
		state.loaded = payload
  },
	addRating(state, { imdbID, source,value}) {
		let fullMovie:FullMovie|any = state.fullMovies.find((movie)=>{
			return movie.imdbID == imdbID
		})
		fullMovie.Ratings.push({Source:source,Value:value})
  },
	saveMovie(state, {imdbID,field,value}) {
		let fullMovie:FullMovie|any = state.fullMovies.find((movie)=>{
			return movie.imdbID == imdbID
		})
		if (field == 'Title') {
			let shortMovie:Movie|any = state.movies.find((movie)=>{
				return movie.imdbID == imdbID
			})
			shortMovie[field] = value
		}
		fullMovie[field] = value
  },
	deleteMovie(state, imdbID) {
	},
	deleteRating(state, {imdbID,source}){
		state.fullMovies.forEach((movie)=>{
			if (movie.imdbID == imdbID && movie.Ratings){
				movie.Ratings = movie.Ratings.filter((rating)=>{
					return rating.Source != source
				})
			}
		})
	}
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchMovies({ state, commit }, searchTerm) {
			if (state.loaded) return
			let res = [] as Array<Movie>
			for await (const hero of state.heros) {
				try {
					let response = await this.$axios.get(`http://www.omdbapi.com/?type=movie&s=${hero}&${apikey}`)
					commit('concatMovie', response.data.Search)
				} catch (error) {
					console.error(error)
				}
			}
			commit('setLoaded', true)
    },
    async fetchMovieSelected({ state, commit }, imdbID) {
      var res
      try {
				res = await this.$axios.$get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&${apikey}`)
      } catch (error) {
				console.error(error)
      }
      commit('pushFullMovie', res)
    },
    async create({ state, commit }, data) {
			let shortMovie:Movie = {
				Title:data.Title,
				Poster:data.Poster,
				Year:data.Year,
				imdbID:data.imdbID,
				Type:data.Type,
			}
			commit('pushFullMovie', data)
			commit('pushMovie', shortMovie)
    },
		async update({ commit },  data) {
			commit('saveMovie',data)
		},
    async destroy({ state, commit }, imdbID) {
			commit('deleteMovie', imdbID)
		},
		async newRating({ state, commit }, data) {
			commit('addRating', data)
		},
		async destroyRating({ state, commit }, data) {
			commit('deleteRating', data)
		},
  }
)
