import Vuex from 'vuex'
import Vue from 'vue'
import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'

Vue.use(Vuex)

const state = {
	pages: [],
	settings: {
		google_analytics_tag: null,
		facebook_pixel_data: null,
		contact_email: null,
	},
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
})

