<template>
	<div>
		<h1 class="text-center py-4">Movies of your favourite Superheros</h1>
		<div class="movies-container row no-gutters">
			<div v-for="movieByHero, i in moviesByHeros" :key="i" class="movies-heros row mt-4">
				<h2 class="col-12 text-capitalize border-title-secondary">{{ movieByHero.hero }}</h2>
				<div v-for="movie, i in movieByHero.movies" :key="i" class="col-2 py-3">
					<div class="movie-col">
						<div class="poster-box" @click="go(movie.imdbID)">
							<img :src="movie.poster" alt="movie poster" class="poster">
							<div class="movie-title">
								<span class="text-truncate">{{ movie.title }}</span>
								<b-icon icon="play-circle" variant="primary"></b-icon>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
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
		moviesByHeros() {
			return this.$accessor.movies.moviesByHeros
		}
	},
	methods: {
		setLoading(value) {
			this.loading = value
		},
		selectMovie(movie) {
			this.selectedMovie = movie
		},
		go(imdbID) {
			this.$router.push('/'+imdbID)
		}
	},
	mounted() {
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
