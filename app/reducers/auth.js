import * as types from '../actions/constants'
import { combineReducers } from 'redux'

const initialUserState = {
	id: null,
	email: null,
	displayName: null
}

// @todo user could have it's own set of reducers
const user = (state = initialUserState, action) => {
	switch (action.type) {
		case types.SIGN_IN_FULFILLED:
			return {
				...state,
				email: action.payload.email,
				displayName: action.payload.displayName || action.payload.email.split('@')[0],
				id: action.payload.uid
			}
		case types.DELETE_USER_FULFILLED:
		case types.SIGN_OUT_FULFILLED:
			return initialUserState
		default:
			return state
	}
}

const isPending = (state = false, action) => {
	switch (action.type) {
		case types.SIGN_IN_PENDING:
		case types.SIGN_OUT_PENDING:
			return true
		case types.SIGN_IN_FULFILLED:
		case types.SIGN_OUT_FULFILLED:
		case types.SIGN_IN_REJECTED:
		case types.SIGN_OUT_REJECTED:
			return false
		default:
			return state
	}
}

const auth = combineReducers({
	isPending,
	user
})
export default auth