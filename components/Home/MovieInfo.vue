<template>
	<div>
		<div v-if="movie">
			<b-row class="justify-content-center">
			<b-col cols="6" lg="3">
				<img class="w-100" :src="poster" :alt="`${movie.Title} poster`">
			</b-col>
			<b-col cols="12" lg="9" class="mb-4">
				<b-row class="align-items-center align-items-lg-end flex-row-reverse">
					<b-col cols="12" lg="6" class="mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
						<span>
							{{ movie.Year }}
							<b class="primary">|</b>
							{{ movie.Runtime }}
							<b class="primary">|</b>
							{{ movie.Rated }}
						</span>
					</b-col>
					<b-col cols="12" lg="6" class="mt-4 mt-lg-0">
						<h1>{{ movie.Title }}</h1>
					</b-col>
				</b-row>
				<p class="mt-3">{{ movie.Plot }}</p>
				<b-row class="mt-auto">
					<b-col v-if="movie.Genre" cols="12" lg="3" class="divider small mt-4">
						<h5>Genre</h5>
						{{ movie.Genre }}
					</b-col>
					<b-col v-if="movie.Actors" cols="12" lg="3" class="divider small mt-4">
						<h5>Actors</h5>
						{{ movie.Actors }}
					</b-col>
					<b-col v-if="movie.Director" cols="12" lg="3" class="divider small mt-4">
						<h5>Director</h5>
						{{ movie.Director }}
					</b-col>
					<b-col v-if="movie.Writer" cols="12" lg="3" class="small mt-4">
						<h5>Writer</h5>
						{{ movie.Writer }}
					</b-col>
				</b-row>
			</b-col>
		</b-row>
		<b-row>
			<b-col v-if="movie.Awards" cols="12" lg="6">
				<h5 class="border-title mt-4">Awards</h5>{{ movie.Awards }}
			</b-col>
			<b-col cols="12" lg="6">
				<h5 class="border-title mt-4">Ratings</h5>
				<ul>
					<li v-if="movie.imdbRating">IMDB: {{ movie.imdbRating }}</li>
					<li v-for="rating in movie.Ratings">
							{{ rating.Source }}: {{ rating.Value }}
					</li>
				</ul>
			</b-col>
		</b-row>
	</div>
</div>
</template>

<script>
export default {
	data() {
		return {

		}
	},
	computed: {
		movie() {
			return this.$accessor.movies.getMovieSelected(this.$route.params.movie)
		},
		poster() {
			if (this.movie && !this.movie.poster) {
				return this.$accessor.no_poster
			}
			return this.$accessor.movies.getMovieSelected(this.$route.params.movie)
		}
	},
	methods: {

	},
	beforeCreate() {
		this.$accessor.movies.fetchMovieSelected(this.$route.params.movie)
	}
}
</script>

<style lang='scss' scoped>

@media (min-width:720px) {
	.divider {
		border-right: 2px solid $primary;
	}
}

@media screen and (max-width:720px) {
	h1 {
		border-bottom: 2px solid $primary;
		font-size: 32px;
	}
}
</style>
