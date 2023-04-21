<template>
  <div>
    <div class="bg-movies-posters"></div>
    <Nuxt />
    <div class="test-fixed">{{$auth.user}}</div>
  </div>
</template>

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

@media screen and (max-width: 480px) {
  .bg-movies-posters {
    background-size: auto 75vh;
    background-repeat: no-repeat;
    height: 75vh;
  }
}

</style>
