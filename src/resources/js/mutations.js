const SET_PAGES = (state, pages) => {
	state.pages = pages
}

const SET_GAT = (state, payload) => {
	state.settings = {...state.settings, google_analytics_tag: payload.gat }
}

const SET_FPX = (state, payload) => {
	state.settings = {...state.settings, facebook_pixel_data: payload.fpx }
}

const SET_CONTACT_EMAIL = (state, payload) => {
	state.settings = {...state.settings, contact_email: payload.contact_email}
}

const SET_SETTINGS = (state, settings) => {
	state.settings = {...state.settings, ...settings}
}

export default {
	SET_PAGES,
	SET_FPX,
	SET_GAT,
	SET_SETTINGS,
	SET_CONTACT_EMAIL,
}
