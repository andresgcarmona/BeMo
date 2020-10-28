const SET_PAGES = (state, pages) => {
	state.pages = pages
}

const SET_GAT = (state, payload) => {
	state.settings = {...state.settings, gat: payload.gat }
}

const SET_FPX = (state, payload) => {
	state.settings = {...state.settings, fpx: payload.fpx }
}

export default {
	SET_PAGES,
	SET_FPX,
	SET_GAT,
}
