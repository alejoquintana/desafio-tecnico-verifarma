<template>
	<div>
		<b-form class="form" @submit.stop.prevent="onSubmit">
			<!--   @reset="onReset" -->
			<b-form-group id="input-group-1" label="Email" label-for="input-1">
				<b-form-input id="input-1" type="email" required
				v-model="$v.form.email.$model"
				placeholder="example@verifarma.com"
				:state="validateState('email')" aria-describedby="input-1-live-feedback"
				></b-form-input>
				<b-form-invalid-feedback id="input-1-live-feedback">
					This is not an email.
				</b-form-invalid-feedback>
			</b-form-group>
			<b-form-group id="input-group-2" label="Password" label-for="input-2">
				<b-form-input id="input-2" type="password" required
				v-model="$v.form.password.$model"
				placeholder="********"
					:state="validateState('password')" aria-describedby="input-2-live-feedback"
				></b-form-input>
				<b-form-invalid-feedback id="input-2-live-feedback">
					This is a required field and must be at least 8 characters.
				</b-form-invalid-feedback>
			</b-form-group>
			<b-button type="submit" variant="primary" class="my-3">Log in</b-button>
		</b-form>
	</div>
</template>

<script>
import Vue from 'vue'
import { validationMixin } from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

export default Vue.extend({
	mixins: [validationMixin],
	validations: {
		form: {
			email: { required, email },
			password: { required, minLength: minLength(8) }
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
		validateState(name) {
			const { $dirty, $error } = this.$v.form[name];
			return $dirty ? !$error : null;
		},
		onSubmit() {
			this.$v.form.$touch();
			if (this.$v.form.$anyError) {
				return;
			}
			this.$accessor.login(this.form)
			this.$router.push('/')
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
