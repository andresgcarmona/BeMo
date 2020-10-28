import './bootstrap'
import Vue from 'vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

new Vue({
	store,
	router,
	mounted() {
		console.log('Vue mounted')
	},
}).$mount('.app')
