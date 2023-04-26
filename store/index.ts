import { getAccessorType, mutationTree, actionTree } from 'typed-vuex'

import * as movies from './movies'

export const state = () => ({
	user: {
		admin: false,
		authenticated: false,
	},
	no_poster:'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930'
})

type RootState = ReturnType<typeof state>

export const getters = {
}

export const mutations = mutationTree(state, {
	authenticate(state) {
		state.user.authenticated = true
	},
	setAdmin(state) {
		state.user.admin = true
	}
})

export const actions = actionTree(
	{ state, getters, mutations },
	{
		login({ commit },data) {
			commit('authenticate')
			if(data.email.includes('admin')){
				commit('setAdmin')
			}
		}
	}
)

export const accessorType = getAccessorType({
	actions,
	getters,
	mutations,
	state,
	modules: {
		movies,
	},
})
