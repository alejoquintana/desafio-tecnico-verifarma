<template>
	<div>
		<b-form class="form" @submit.stop.prevent="create">
		<div class="my-4 d-flex align-items-center">
			<b-button @click="$emit('back')" variant="link">
				<b-icon icon="chevron-left"></b-icon> Back
			</b-button>
			<b-button  type="submit" variant="success" class="ml-auto">
				<b-icon icon="plus"></b-icon> Create
			</b-button>
		</div>
		<b-row class="justify-content-center">
			<b-col cols="12" lg="12" class="mb-4">
				<span>imdbID</span>
				<b-form-input v-model="movie.imdbID" required></b-form-input>
			</b-col>
			<b-col cols="6" lg="3">
				<img class="w-100" :src="movie.Poster" :alt="`${movie.Name} poster`">
				<b-form-input v-model="movie.Poster"></b-form-input>
			</b-col>
			<b-col cols="12" lg="9" class="mb-4">
				<b-row class="align-items-center align-items-lg-end flex-row-reverse">
					<b-col cols="12" lg="6" class="mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
						<div>
							<span>Year</span>
							<b-form-input v-model="movie.Year" required></b-form-input>
						</div>
						<div>
							<span>Runtime</span>
							<b-form-input v-model="movie.Runtime" required></b-form-input>
						</div>
						<div>
							<span>Rated</span>
							<b-form-input v-model="movie.Rated" required></b-form-input>
						</div>
					</b-col>
					<b-col cols="12" lg="6" class="mt-4 mt-lg-0">
						<span>Title</span>
						<b-form-input v-model="movie.Title" required></b-form-input>
					</b-col>
				</b-row>
				<div class="py-4">
					<span>Plot</span>
					<b-form-textarea v-model="movie.Plot" rows="4"></b-form-textarea>
				</div>
				<b-row class="mt-auto">
					<b-col cols="12" lg="3" class="divider small mt-4">
						<span>Genre</span>
						<b-form-input v-model="movie.Genre"></b-form-input>
					</b-col>
					<b-col cols="12" lg="3" class="divider small mt-4">
						<span>Actors</span>
						<b-form-input v-model="movie.Actors"></b-form-input>
					</b-col>
					<b-col cols="12" lg="3" class="divider small mt-4">
						<span>Director</span>
						<b-form-input v-model="movie.Director"></b-form-input>
					</b-col>
					<b-col cols="12" lg="3" class="small mt-4">
						<span>Writer</span>
						<b-form-input v-model="movie.Writer"></b-form-input>
					</b-col>
				</b-row>
			</b-col>
		</b-row>
		<b-row class="mt-4">
			<b-col cols="12" lg="6">
				<span>Awards</span>
				<b-form-input v-model="movie.Awards"></b-form-input>
			</b-col>
			<b-col cols="12" lg="6">
				<span>Ratings</span>
				<div>
					<div class="d-flex gap-10 align-items-center mt-3">
						<span>IMDB</span>
						<b-form-input v-model="movie.imdbRating"></b-form-input>
					</div>
					<div v-for="rating in movie.Ratings" class="d-flex gap-10 align-items-center mt-3">
						<b-icon icon="trash" variant="primary"></b-icon>
						<span>{{ rating.Source }}</span>
						<b-form-input v-model="rating.Value"></b-form-input>
					</div>
					<div @click="addRating()" class="d-flex gap-10 align-items-center mt-3 pointer">
						<b-icon icon="plus-circle" variant="primary"></b-icon>
						<span>Add rating</span>
					</div>
				</div>
			</b-col>
		</b-row>
		</b-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			movie: {
				Title: '',
				Year: '',
				imdbID: '',
				Type: '',
				Poster: '',
				Rated: '',
				Released: '',
				Runtime: '',
				Genre: '',
				Director: '',
				Writer: '',
				Actors: '',
				Plot: '',
				Language: '',
				Country: '',
				Awards: '',
				Ratings: [],
				imdbRating: '',
			}
		}
	},
	computed: {
	},
	methods: {
		addRating(){
			this.movie.Ratings.push({Source:'Source',Value:'Value'})
		},
		create() {
			if (
				this.movie.imdbID &&
				this.movie.Year &&
				this.movie.Runtime &&
				this.movie.Rated &&
				this.movie.Title
			) {
				this.$accessor.movies.create(this.movie)
				this.$emit('back')
			}
		},
	},
}
</script>

<style lang='scss' scoped>
span {
	min-width: fit-content;
}

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
