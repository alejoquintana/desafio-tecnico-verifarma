<template>
	<div>
		<div class="bg-movies-posters"></div>
		<NavBar/>
		<div class="max-width-nuxt m-auto px-3">
			<div v-if="$route.name != 'index'" class="my-4">
				<b-button @click="$router.back()" variant="link">
					<b-icon icon="chevron-left"></b-icon> Back
				</b-button>
			</div>
			<Nuxt />
		</div>
	</div>
</template>

<script>
import NavBar from "@/components/layout/NavBar.vue";
export default {
	components:{
		NavBar
	},
}
</script>

<style lang='scss' scoped>
.bg-movies-posters {
	width: 100vw;
	height: 100vh;
	position: fixed;
	z-index: -1;
	top: 0;
	background-image:
		linear-gradient(to bottom, rgba(0, 0, 0, 0), $dark),
		url('assets/imgs/darker.png');
	opacity: 0.5;
}

.name-page {
	//font-size: 52px;
	font-weight: bold;
	//text-align: center;
	color: $primary;
	text-shadow: 2px 2px $secondary;
}

.nav-bar {
	background-color: $secondary;
	padding: 8px 20px;
	.navbar-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
}

@media (min-width: 480px) {
	.name-page {
		font-size: 72px;
	}
}

@media screen and (max-width: 480px) {
	.bg-movies-posters {
		background-size: auto 75vh;
		background-repeat: no-repeat;
		height: 75vh;
	}
}
</style>
