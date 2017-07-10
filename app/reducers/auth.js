import * as types from '../actions/constants'
import { combineReducers } from 'redux'

const initialUserState = {
	id: null,
	email: null,
	displayName: null
}

const user = (state = initialUserState, { type, payload }) => {
	switch (type) {
		case types.GET_AUTH_FULFILLED:
			return {
				...state,
				email: payload.email,
				displayName: payload.displayName || payload.email.split('@')[0],
				id: payload.uid
			}
		default:
			return state
	}
}

//@todo initialState could default to whatever is in localStorage
//@todo maybe this state should depend on the token
const isAuthorized = (state = false, { payload, type }) => { 
	switch (type) {
		case types.GET_AUTH_FULFILLED:
			return payload.uid !== null
		case types.GET_AUTH_REJECTED:
			return false
		default:
			return state
	}
}

const error = (state = null, action) => {
	switch (action.type) {
		case types.SIGN_IN_FULFILLED:
			return null
		case types.SIGN_IN_REJECTED:
			return { ...action.error }
		default:
			return state
	}
}

const auth = combineReducers({
	user,
	isAuthorized,
	error
})

export default auth