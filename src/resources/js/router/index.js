import VueRouter from 'vue-router'
import Vue from 'vue'
import DashboardPage from '../pages/DashboardPage'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/dashboard',
			name: 'dashboard',
			component: DashboardPage,
		},
	]
})

router.beforeEach((to, from, next) => {
	console.log(from, to)
	next()
})

export default router
