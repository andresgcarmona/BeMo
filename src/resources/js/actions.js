import { toggleNoIndex as toggleIndexing } from './api'

const toggleNoIndex = async ({ commit }, page) => {
	try {
		const response = await toggleIndexing(page)
		
		return response.data
	}
	catch(e) {
		console.error(e)
	}
}

export default {
	toggleNoIndex,
}
