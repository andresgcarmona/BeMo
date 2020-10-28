import './bootstrap'
import Vue from 'vue'
import store from './store'
import router from './router'
import { mapMutations } from 'vuex'

Vue.config.productionTip = false

new Vue({
	store,
	router,
	methods: {
		...mapMutations(['SET_PAGES', 'SET_SETTINGS', 'SET_CONTACT_EMAIL', 'SET_GAT', 'SET_FPX']),
	},
	mounted() {
		this['SET_PAGES'](window.pages)
		this['SET_SETTINGS'](window.settings)
	},
}).$mount('.app')
