<template>
  <MovieInfo />
</template>

<script lang="ts">
import Vue from 'vue'
import MovieInfo from '@/components/Home/MovieInfo.vue';

export default Vue.extend({
    name: "MoviePage",
    layout: "default",
    components: { MovieInfo },
		middleware: 'authenticated'

})
</script>
