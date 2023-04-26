<template>
	<div>
		<h1 class="text-center py-4">Movies of your favourite Superheros</h1>
		<b-row class="mt-4">
			<b-col cols="6" lg="2" v-for="movie, i in movies" :key="i" class="py-3">
				<div class="movie-col">
					<div class="poster-box" @click="go(movie.imdbID)">
						<img :src="poster(movie.Poster)" alt="movie poster" class="poster">
						<div class="movie-title">
							<span class="text-truncate">{{ movie.Title }}</span>
							<b-icon icon="play-circle" variant="primary"></b-icon>
						</div>
					</div>
				</div>
			</b-col>
		</b-row>
	</div>
</template>

<script>
import MovieInfo from "./MovieInfo.vue";
export default {
	components: {
		MovieInfo,
	},
	data() {
		return {
			loading: false,
			selectedMovie: null,
		}
	},
	computed: {
		movies() {
			return this.$accessor.movies.movies
		}
	},
	methods: {
		poster(url){
			if (!url) {
				console.log('this.$accessor.no_poster',this.$accessor.no_poster);
				return this.$accessor.no_poster
			}
			return url
		},
		setLoading(value) {
			this.loading = value
		},
		selectMovie(movie) {
			this.selectedMovie = movie
		},
		go(imdbID) {
			this.$router.push('/' + imdbID)
		}
	},
	beforeCreate() {
		this.$accessor.movies.fetchMovies()
	}
}
</script>

<style lang='scss' scoped>
.movie-col {
	border-radius: 12px;
	border: $primary 1px solid;
	overflow: hidden;

	.poster-box {
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;

		.poster {
			max-width: 100%;
		}

	}

	.movie-title {
		color: #fff;
		display: flex;
		transition: all 500ms;
		align-items: flex-end;
		justify-content: space-between;
		width: 100%;
		height: 25%;
		padding: 10px 15px;
		position: absolute;
		bottom: 0;
		transform: translateY(100%);
		background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
	}
}

.movie-col:hover {
	.movie-title {
		transform: translateY(0);
	}
}
</style>
