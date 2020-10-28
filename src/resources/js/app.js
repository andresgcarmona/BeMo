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
		...mapMutations(['SET_PAGES', 'SET_GAT', 'SET_FPX']),
	},
	mounted() {
		this['SET_PAGES'](window.pages)
		this['SET_GAT']({gat: window.settings.google_analytics_tag})
		this['SET_FPX']({fpx: window.settings.facebook_pixel_data})
	},
}).$mount('.app')
