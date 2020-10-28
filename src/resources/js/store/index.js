import Vuex from 'vuex'
import Vue from 'vue'
import getters from '../getters'
import mutations from '../mutations'
import actions from '../actions'

Vue.use(Vuex)

const state = {
	pages: [],
}

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
})

