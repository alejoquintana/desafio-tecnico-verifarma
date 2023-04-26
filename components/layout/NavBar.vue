<template>
		<div class="nav-bar py-3">
			<div class="navbar-container max-width-nuxt m-auto px-lg-3">
				<span @click="go('/')" class="pointer bold fs-24">Verifarma+</span>
				<span v-if="$accessor.user.admin" @click="go('/admin')" class="pointer fs-24">Admin</span>
				<p class="pointer" @click="go('search')" v-if="$route.name!='search'">
					<b-icon icon="search" class="mr-2"></b-icon>
					<span v-if="$mq=='lg'">Search</span>
				</p>
			</div>
		</div>
</template>

<script>
export default {
	methods: {
		go(page){
			this.$router.push(page)
		}
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
