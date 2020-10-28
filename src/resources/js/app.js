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
		...mapMutations(['SET_PAGES']),
	},
	mounted() {
		if(window.pages) {
			this['SET_PAGES'](window.pages)
			
			delete window.pages
		}
	},
}).$mount('.app')
