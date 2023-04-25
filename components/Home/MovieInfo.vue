<template>
	<div>
		<b-row class="justify-content-center">
			<b-col cols="6" lg="3">
				<img class="w-100" :src="movie.poster" :alt="`${movie.name} poster`">
			</b-col>
			<b-col cols="12" lg="9" class="mb-4">
				<b-row class="align-items-center align-items-lg-end flex-row-reverse">
					<b-col cols="12" lg="6" class="mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
						<span>
							{{ movie.year }}
							<b class="primary">|</b>
							{{ movie.runtime }}
							<b class="primary">|</b>
							{{ movie.rated }}
						</span>
					</b-col>
					<b-col cols="12" lg="6" class="mt-4 mt-lg-0">
						<h1>{{ movie.title }}</h1>
					</b-col>
				</b-row>
				<p class="mt-3">{{ movie.plot }}</p>
				<b-row>
					<b-col cols="12" lg="3" class="divider small mt-4">
						<h5>Genre</h5>
						{{ movie.genre }}
					</b-col>
					<b-col cols="12" lg="3" class="divider small mt-4">
						<h5>Actors</h5>
						{{ movie.actors }}
					</b-col>
					<b-col cols="12" lg="3" class="divider small mt-4">
						<h5>Director</h5>
						{{ movie.director }}
					</b-col>
					<b-col cols="12" lg="3" class="small mt-4">
						<h5>Writer</h5>
						{{ movie.writer }}
					</b-col>
				</b-row>
			</b-col>
		</b-row>
		<b-row>
			<b-col cols="12" lg="6">
				<h5 class="border-title mt-4">Awards</h5>{{ movie.awards }}
			</b-col>
			<b-col cols="12" lg="6">
				<h5 class="border-title mt-4">Ratings</h5>
				<ul>
					<li>IMDB: {{ movie.imdbRating }}</li>
					<li v-for="rating in movie.ratings">
						{{ rating.source }}: {{ rating.value }}
					</li>
				</ul>
			</b-col>
		</b-row>
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
			return this.$accessor.movies.movieSelected
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
