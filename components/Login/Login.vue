<template>
	<div>
		<b-form class="form" @submit.stop.prevent="onSubmit"> <!--   @reset="onReset" -->
			<b-form-group id="input-group-1" label="Email" label-for="input-1">
				<b-form-input id="input-1" v-model="form.email" type="email" placeholder="example@verifarma.com"
				required></b-form-input>
			</b-form-group>
			<b-form-group id="input-group-2" label="Password" label-for="input-2">
				<b-form-input v-model="$v.form.password.$model" id="input-2" type="password" placeholder="********" required></b-form-input>
			</b-form-group>
			<b-button type="submit" variant="primary" class="my-3">Log in</b-button>
		</b-form>
		<div class="fcc align-items-center mt-5">
			<span class="light">Don't have an account?</span>
			<b-button variant="link" size="lg" class="btn-login" to="/register">Sign up</b-button>
		</div>
	</div>
</template>

<script>
import Vue from 'vue'
import { validationMixin } from 'vuelidate'
import { required, minLength ,email } from 'vuelidate/lib/validators'

export default Vue.extend({
	mixins: [validationMixin],
	validations: {
		form: {
			email: {required, email },
			password: {required, minLength: minLength(8) }
		}
	},
	data() {
		return {
			form: {
				email: '',
				password: ''
			}
		}
	},
	computed: {

	},
	methods: {
		onSubmit() {
			this.$auth.login('local', { data: this.formData })
		}
	},
	mounted() {

	},
})
</script>

<style lang='scss' scoped>
.form {
	max-width: 700px;
	margin: auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
</style>
