export default function ({ store, redirect }:any) {
	// If the user is not authenticated
	if (!store.state.user.authenticated) {
		return redirect('/welcome')
	}
}
