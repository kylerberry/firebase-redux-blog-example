import * as types from '../actions/constants'
import { combineReducers } from 'redux'

//@todo initialState could default to whatever is in localStorage
const isAuthorized = (state = false, action) => {
	switch (action.type) {
		case types.ATTEMPT_AUTH_FULFILLED:
			//return payload
			return true
		case types.ATTEMPT_AUTH_REJECTED:
			//return payload
			return false
		default:
			return state
	}
}

const error = (state = null, action) => {
	switch (action.type) {
		case types.ATTEMPT_AUTH_FULFILLED:
			return null
		case types.ATTEMPT_AUTH_REJECTED:
			return { ...action.error }
		default:
			return state
	}
}

const auth = combineReducers({
	isAuthorized,
	error
})

export default auth