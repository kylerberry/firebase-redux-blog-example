import { combineReducers } from 'react-redux'
import * as types from '../actions/constants'

const initialState = {
	message: null,
	type: null
}

const flash = (state = initialState, action) => {
	switch (action.type) {
		case types.SIGN_IN_FULFILLED:
			return {
				message: 'Successfully signed in.',
				type: 'success'
			}
		case types.SIGN_OUT_FULFILLED:
			return {
				message: 'Successfully signed out.',
				type: 'success'
			}

		case types.DISMISS_FLASH:
			return initialState

		case types.ROUTE_CHANGE:
			let { payload } = action
			// @todo this is a temporary workaround.
			// Need a better solution for showing success messages after redirect
			if (payload.pathname == '/') {
				return state
			}

		default:
			if (action.error) {
				return {
					message: action.error,
					type: 'error'
				}
			}
			return state
	}
}

export default flash