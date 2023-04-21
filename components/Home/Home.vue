<template>
  <div>
    <div>
      <div v-for="movie, i in movies" :key="i" class="movie-item">
        <img :src="movie.poster" alt="movie poster" v-if="$mq == 'lg'">
        <span class="text-truncate">{{ movie.title }}</span>
        <b-button variant="danger"><b-icon-trash-fill/></b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      selected:[]
    }
  },
  computed: {
    movies() {
      return this.$accessor.movies.movies
    }
  },
  methods: {

  },
  mounted() {
    this.$accessor.movies.fetchMovies()
  }
}
</script>

<style lang='scss' scoped>
.movie-item {
  font-size: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  padding: 10px 20px;
  border: $light 1px solid;
  .checkbox{
    flex-shrink: 1;
  }
}
</style>
