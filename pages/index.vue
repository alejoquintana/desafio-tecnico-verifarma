<template>
  <Home />
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  layout:'default',
	middleware: 'authenticated'
})
</script>
