<template>
	<div>
		<CreateMovie @back="create = null" v-if="create" />
		<EditMovie :imdbID="selected" @back="selectMovie(null)" v-else-if="selected" />
		<div v-else>
			<div class="d-flex align-items-center my-4">
				<h2 class="text-center">Movies</h2>
				<b-button @click="create = true" class="ml-auto px-3">
					Create Movie
				</b-button>
			</div>
			<div class="movies-list px-3">
				<div v-for="movie, i in movies" :key="i">
					<div class="movie-item pointer p-3" @click="selectMovie(movie.imdbID)">
						<div class="movie-title text-truncate">
							{{ movie.Title }}
						</div>
						<b-icon icon="chevron-right" variant="primary"></b-icon>
					</div>
				</div>
			</div>
		</div>
		</div>
</template>

<script>
import EditMovie from "./EditMovie.vue";
import CreateMovie from "./CreateMovie.vue";
export default {
	components: { EditMovie, CreateMovie },
	data() {
		return {
			create: false,
			selected: ''
		}
	},
	computed: {
		movies() {
			return this.$accessor.movies.movies
		}
	},
	methods: {
		selectMovie(imdbID) {
			this.selected = imdbID
		}
	},
	beforeCreate() {
		this.$accessor.movies.fetchMovies()
	}
}
</script>

<style lang='scss' scoped>
.movie-item:hover {
	background-color: $secondary;
}

.movie-item {
	display: flex;
	border-radius: 12px;
	justify-content: space-between;
	align-items: center;
	transition: all 500ms;
}
</style>
