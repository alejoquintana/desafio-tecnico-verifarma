<template>
  <div>
    <b-form-input
    v-model="searchTerm"
    @keyup="search()"
    placeholder="Buscar película..."
    ></b-form-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: '',
      timeout: null,
    }
  },
  computed: {
  },
  methods: {
    async search() {
      this.$emit('loading', true)
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        this.$accessor.movies.fetchMovies(this.searchTerm)
        this.$emit('loading', false)
      }, 2000);
    }
  },
  mounted() {
  }
}
</script>

<style lang='scss' scoped>

</style>
