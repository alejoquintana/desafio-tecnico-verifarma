<template>
  <div>
    <div class="center-container">
        <h1 class="name-page">
          Verifarma+
        </h1>
        <p class="slogan">
          La mejor forma de disfrutar una película
        </p>
      </div>
    <div class="fc w-100 fixed" style="bottom: 50px;">
      <b-button variant="link" size="lg" class="btn btn-login" to="/login">Sign in</b-button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.name-page{
  font-size: 52px;
  font-weight: bold;
  text-align: center;
  color: $primary;
  text-shadow: 2px 2px $secondary;
}

@media (min-width: 480px) {
  .name-page{
    font-size: 72px;
  }
  .slogan{
    font-size: 22px;
  }
}
</style>
