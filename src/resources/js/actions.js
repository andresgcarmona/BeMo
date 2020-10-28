import { toggleNoIndex as toggleIndexing, saveSettings } from './api'

const toggleNoIndex = async ({ commit }, page) => {
	try {
		const response = await toggleIndexing(page)
		
		return response.data
	}
	catch(e) {
		console.error(e)
	}
}

const updateSettings = async ({ commit }, page) => {
	try {
		const response = await saveSettings(page)
		
		return response.data
	}
	catch(e) {
		console.error(e)
	}
}

export default {
	toggleNoIndex,
	updateSettings,
}
