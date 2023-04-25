const apikey = "apikey=24bb037b";

import { getterTree, mutationTree, actionTree } from 'typed-vuex'

export const state = () => ({
	heros: ['batman', 'superman', 'spiderman'],
  moviesByHeros: [
		{hero:'batman',movies:[{title:"Batman Begins",year:"2005",imdbID:"tt0372784",type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{title:"Batman v Superman: Dawn of Justice", year:"2016", imdbID:"tt2975590", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{title:"The Batman", year:"2022", imdbID:"tt1877830", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"},{title:"Batman", year:"1989", imdbID:"tt0096895", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg"},{title:"Batman Returns", year:"1992", imdbID:"tt0103776", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{title:"Batman & Robin", year:"1997", imdbID:"tt0118688", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{title:"Batman Forever", year:"1995", imdbID:"tt0112462", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{title:"The Lego Batman Movie", year:"2017", imdbID:"tt4116284", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{title:"Batman v Superman: Dawn of Justice (Ultimate Edition)", year:"2016", imdbID:"tt18689424", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"},{title:"Batman: The Killing Joke", year:"2016", imdbID:"tt4853102", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}]},
		{hero:'superman',movies:[{title:"Batman Begins",year:"2005",imdbID:"tt0372784",type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{title:"Batman v Superman: Dawn of Justice", year:"2016", imdbID:"tt2975590", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{title:"The Batman", year:"2022", imdbID:"tt1877830", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"},{title:"Batman", year:"1989", imdbID:"tt0096895", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg"},{title:"Batman Returns", year:"1992", imdbID:"tt0103776", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{title:"Batman & Robin", year:"1997", imdbID:"tt0118688", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{title:"Batman Forever", year:"1995", imdbID:"tt0112462", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{title:"The Lego Batman Movie", year:"2017", imdbID:"tt4116284", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{title:"Batman v Superman: Dawn of Justice (Ultimate Edition)", year:"2016", imdbID:"tt18689424", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"},{title:"Batman: The Killing Joke", year:"2016", imdbID:"tt4853102", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}]},
		{hero:'spiderman',movies:[{title:"Batman Begins",year:"2005",imdbID:"tt0372784",type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{title:"Batman v Superman: Dawn of Justice", year:"2016", imdbID:"tt2975590", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},{title:"The Batman", year:"2022", imdbID:"tt1877830", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg"},{title:"Batman", year:"1989", imdbID:"tt0096895", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BZDNjOGNhN2UtNmNhMC00YjU4LWEzMmUtNzRkM2RjN2RiMjc5XkEyXkFqcGdeQXVyMTU0OTM5ODc1._V1_SX300.jpg"},{title:"Batman Returns", year:"1992", imdbID:"tt0103776", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg"},{title:"Batman & Robin", year:"1997", imdbID:"tt0118688", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg"},{title:"Batman Forever", year:"1995", imdbID:"tt0112462", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BNDdjYmFiYWEtYzBhZS00YTZkLWFlODgtY2I5MDE0NzZmMDljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},{title:"The Lego Batman Movie", year:"2017", imdbID:"tt4116284", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMTcyNTEyOTY0M15BMl5BanBnXkFtZTgwOTAyNzU3MDI@._V1_SX300.jpg"},{title:"Batman v Superman: Dawn of Justice (Ultimate Edition)", year:"2016", imdbID:"tt18689424", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BOTRlNWQwM2ItNjkyZC00MGI3LThkYjktZmE5N2FlMzcyNTIyXkEyXkFqcGdeQXVyMTEyNzgwMDUw._V1_SX300.jpg"},{title:"Batman: The Killing Joke", year:"2016", imdbID:"tt4853102", type:"movie",poster:"https://m.media-amazon.com/images/M/MV5BMTdjZTliODYtNWExMi00NjQ1LWIzN2MtN2Q5NTg5NTk3NzliL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"}]}
	],
  movies: [],
  movieSelected: {
    title: "Batman Returns", year: "1992", rated: "PG-13", released: "19 Jun 1992", runtime: "126 min", genre: "Action, Crime, Fantasy", director: "Tim Burton", writer: "Bob Kane, Daniel Waters, Sam Hamm", actors: "Michael Keaton, Danny DeVito, Michelle Pfeiffer", plot: "In the sewers of gotham city to the rooftops of the gotham city the penguin wants to know where he came from well in his villain ways catwoman plans to kill rich man of gotham max shreak but as he battles with millionaire Bruce Wayne both ladies men have their own secrets Bruce Wayne is back as Bat man trying to stop the penguin Max is helping penguin steal gotham city while selina Kyle/catwoman tries to help penguin not knowing her man murder target also her murder is helping him but all four men have their goals taking gotham from crime winning gotham city assassination for two men and more money to be gotham citys number one rich man.", language: "English", country: "United States, United Kingdom", awards: "Nominated for 2 Oscars. 2 wins & 29 nominations total", poster: "https://m.media-amazon.com/images/M/MV5BOGZmYzVkMmItM2NiOS00MDI3LWI4ZWQtMTg0YWZkODRkMmViXkEyXkFqcGdeQXVyODY0NzcxNw@@._V1_SX300.jpg", ratings: [{ source: "Internet Movie Database", value: "7.1/10" }, { source: "rotten tomatoes", value: "81%" }, { source: "Metacritic", value: "68/100" }], metascore: "68", imdbRating: "7.1", imdbVotes: "311,714", imdbID: "tt0103776", type: "movie", DVD: "22 Aug 1997", boxOffice: "$162,924,631", production: "N/A", website: "N/A", response: true
  }
})

export const getters = getterTree(state, {
  //getMovies: state => state.movies
})

export const mutations = mutationTree(state, {
  setMovies(state, payload) {
    state.movies = payload
  },
  setMovieSelected(state, payload) {
    state.movieSelected = payload
  },
})

export const actions = actionTree(
  { state, getters, mutations },
  {
    async fetchMovies({ state, commit }, searchTerm) {
      var res = state.movies
      try {
        let search = searchTerm ? '' : 'searchTerm'
        //res  = await this.$axios.$get(`http://www.omdbapi.com/?type=movie&s=${search}&${apikey}`)
      } catch (error) {
        console.error(error)
      }
      commit('setMovies', res)
    },
    async fetchMovieSelected({ state, commit }, imdbID) {
      var res = state.movieSelected
      try {
        //res = await this.$axios.$get(`http://www.omdbapi.com/?i=${imdbID}&plot=full&${apikey}`)
      } catch (error) {
        console.error(error)
      }
      commit('setMovieSelected', res)
    }
  }
)
