<template>
  <div>
    <div class="bg-movies-posters"></div>
    <b-navbar class="mb-3" toggleable="lg" type="dark" variant="secondary" :sticky="true">
      <b-navbar-brand href="#" class="primary bold fs-24">Verifarma+</b-navbar-brand>
      <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
          <b-nav-item href="#" disabled>Disabled</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>

          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown right>
            <template #button-content>
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse> -->
    </b-navbar>
    <Nuxt />
    <div class="test-fixed">{{ $auth.user }}</div>
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

.name-page {
  //font-size: 52px;
  font-weight: bold;
  //text-align: center;
  color: $primary;
  text-shadow: 2px 2px $secondary;
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
