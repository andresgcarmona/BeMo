import '../../bootstrap'
import Vue from 'vue'
import store from '../../store'
import router from '../../router'
import { mapActions } from 'vuex'

Vue.config.productionTip = false

new Vue({
	store,
	router,
	methods: {
		...mapActions(['savePage']),
	},
	mounted() {
	},
}).$mount('.app')
