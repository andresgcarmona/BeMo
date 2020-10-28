import axios from 'axios'

const toggleNoIndex = async (page) => {
	try {
		return await axios.post(`/page/${page.id}/toggle-no-index`)
	}
	catch(e) {
		throw e
	}
}

const saveSettings = async (settings) => {
	try {
		return await axios.post(`/settings`, {
			...settings
		})
	}
	catch(e) {
		throw e
	}
}

export {
	toggleNoIndex,
	saveSettings,
}
