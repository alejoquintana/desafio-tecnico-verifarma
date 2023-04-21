<template>
  <div>
    <b-form class="center-container" @submit="onSubmit"> <!--   @reset="onReset" -->
      <b-form-group id="input-group-1" label="Email" label-for="input-1"
        description="We'll never share your email with anyone else.">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email" required></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label="Contraseña" label-for="input-2"
        description="We'll never share your email with anyone else.">
        <b-form-input id="input-2" v-model="form.password" type="password" placeholder="Enter email" required></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
    <div class="fc w-100 fixed" style="bottom: 50px;">
      <b-button variant="link" size="lg" class="btn-login" to="/register">REGISTRATE</b-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      form:{
        email:'',
        password:''
      }
    }
  },
  computed: {

  },
  methods: {
    onSubmit(){
      this.$auth.login('local', { data: this.formData })
    }
  },
  mounted() {

  }
}
</script>

<style lang='scss' scoped></style>
