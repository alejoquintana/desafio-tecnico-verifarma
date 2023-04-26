<template>
	<div>
		<div v-if="movie && movie.Title">
			<div>
				<b-modal id="destroy-modal" title="Are you sure?" @ok="destroy()" header-bg-variant="dark"
					header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark"
					footer-text-variant="light">
					<p class="my-4">it will be deleted permanently</p>
				</b-modal>
			</div>
			<div class="my-4 d-flex align-items-center">
				<b-button @click="$emit('back')" variant="link">
					<b-icon icon="chevron-left"></b-icon> Back
				</b-button>
				<b-button variant="danger" class="ml-auto" v-b-modal.destroy-modal>
					<b-icon icon="trash"></b-icon> Delete Movie
				</b-button>
			</div>
			<b-row class="justify-content-center">
				<b-col cols="6" lg="3">
					<img class="w-100" :src="poster" :alt="`${movie.Name} poster`">
					<b-form-input @change="save($event, 'Poster')" :value="movie.Poster"></b-form-input>
				</b-col>
				<b-col cols="12" lg="9" class="mb-4">
					<b-row class="align-items-center align-items-lg-end flex-row-reverse">
						<b-col cols="12" lg="6" class="mt-4 mt-lg-0 d-flex justify-content-center justify-content-lg-end">
							<div>
								<span>Year</span>
								<b-form-input @change="save($event, 'Year')" :value="movie.Year"></b-form-input>
							</div>
							<div>
								<span>Runtime</span>
								<b-form-input @change="save($event, 'Runtime')" :value="movie.Runtime"></b-form-input>
							</div>
							<div>
								<span>Rated</span>
								<b-form-input @change="save($event, 'Rated')" :value="movie.Rated"></b-form-input>
							</div>
						</b-col>
						<b-col cols="12" lg="6" class="mt-4 mt-lg-0">
							<span>Title</span>
							<b-form-input @change="save($event, 'Title')" :value="movie.Title"></b-form-input>
						</b-col>
					</b-row>
					<div class="py-4">
						<span>Plot</span>
						<b-form-textarea @change="save($event, 'Title')" :value="movie.Plot" rows="4"></b-form-textarea>
					</div>
					<b-row class="mt-auto">
						<b-col cols="12" lg="3" class="divider small mt-4">
							<span>Genre</span>
							<b-form-input @change="save($event, 'Genre')" :value="movie.Genre"></b-form-input>
						</b-col>
						<b-col cols="12" lg="3" class="divider small mt-4">
							<span>Actors</span>
							<b-form-input @change="save($event, 'Actors')" :value="movie.Actors"></b-form-input>
						</b-col>
						<b-col cols="12" lg="3" class="divider small mt-4">
							<span>Director</span>
							<b-form-input @change="save($event, 'Director')" :value="movie.Director"></b-form-input>
						</b-col>
						<b-col cols="12" lg="3" class="small mt-4">
							<span>Writer</span>
							<b-form-input @change="save($event, 'Writer')" :value="movie.Writer"></b-form-input>
						</b-col>
					</b-row>
				</b-col>
			</b-row>
			<b-row class="mt-4">
				<b-col cols="12" lg="6">
					<span>Awards</span>
					<b-form-input @change="save($event, 'Awards')" :value="movie.Awards"></b-form-input>
				</b-col>
				<b-col cols="12" lg="6">
					<span>Ratings</span>
					<div>
						<div v-if="movie.imdbRating" class="d-flex gap-10 align-items-center mt-3">
							<!-- <b-icon icon="trash" variant="primary"></b-icon> -->
							<span>IMDB</span>
							<b-form-input @change="save($event, 'imdbRating')" :value="movie.imdbRating"></b-form-input>
						</div>
						<div v-if="movie.Ratings && movie.Ratings.length">
							<div v-for="rating in movie.Ratings" class="d-flex gap-10 align-items-center mt-3">
								<b-icon @click="destroyRating(source)" icon="plus-circle" variant="primary" class="pointer"></b-icon>
								<span>{{ rating.Source}}</span>
								<b-form-input v-model="rating.Value"></b-form-input>
							</div>
						</div>
						<b-button class="d-flex gap-10 align-items-center mt-3" v-b-modal.new-rating-modal>
							<b-icon icon="plus-circle" variant="primary" class="pointer"></b-icon>
							<span>Add rating</span>
						</b-button>
						<b-modal id="new-rating-modal" title="New Rating" @ok="addRating()" header-bg-variant="dark"
							header-text-variant="light" body-bg-variant="dark" body-text-variant="light" footer-bg-variant="dark"
							footer-text-variant="light">
							<span>Source</span>
							<b-form-input v-model="newRatingData.source"></b-form-input>
							<span>Value</span>
							<b-form-input v-model="newRatingData.value"></b-form-input>
						</b-modal>
					</div>
				</b-col>
			</b-row>
		</div>
	</div>
</template>

<script>
export default {
	props: ['imdbID'],
	data() {
		return {
			newRatingData: {
				source: '',
				value: ''
			}
		}
	},
	computed: {
		movie() {
			return this.$accessor.movies.getMovieSelected(this.imdbID)
		},
		poster() {
			if (this.movie && !this.movie.Poster) {
				return this.$accessor.no_poster
			}
			return this.movie.Poster
		},
	},
	methods: {
		addRating() {
			this.$accessor.movies.newRating({
				imdbID: this.imdbID,
				source: this.newRatingData.source,
				value: this.newRatingData.value,
			})
			this.newRatingData.source = ''
			this.newRatingData.value = ''
		},
		destroyRating(source) {
			this.$accessor.movies.destroyRating({
				imdbID: this.imdbID,
				source: source
			})
		},
		destroy() {
			this.$accessor.movies.destroy(this.imdbID)
			this.$emit('back')
		},
		save(ev, field) {
			let data = {
				imdbID: this.imdbID,
				field,
				value: ev
			}
			this.$accessor.movies.update(data)
		}
	},
	created() {
		this.$accessor.movies.fetchMovieSelected(this.imdbID)
	}
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
