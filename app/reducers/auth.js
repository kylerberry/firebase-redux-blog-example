import * as types from '../actions/constants'
import { combineReducers } from 'redux'

const initialUserState = {
	id: null,
	email: null,
	displayName: null,
	jwt: null
}

// @todo user could have it's own set of reducers
const user = (state = initialUserState, action) => {
	switch (action.type) {
		case types.SIGN_IN_FULFILLED:
		// case types.GET_AUTHORIZED_USER_FULFILLED:
			return {
				...state,
				email: action.payload.email,
				displayName: action.payload.displayName || action.payload.email.split('@')[0],
				id: action.payload.uid,
				jwt: action.payload.jwt
			}
		case types.REMOVE_AUTHORIZED_USER:
			return initialUserState
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

export const isAuthorized = ({ user }) => {
	return Boolean(user.jwt)
}

const auth = combineReducers({
	user,
	error
})
export default auth