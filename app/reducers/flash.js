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

		case types.ROUTE_CHANGE:
		case types.DISMISS_FLASH:
			return initialState	

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