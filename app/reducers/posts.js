import * as types from '../actions/constants'

import { combineReducers } from 'redux'

/*
{
	posts : [],
	isFetching: false
}
*/

const isFetching = (state = false, action) => {
	switch (action.type) {
		case types.FETCH_POSTS_PENDING:
			return true
		default:
			return false
	}
}

const byId = (state = {}, action) => {
	switch (action.type) {
		case types.FETCH_POSTS_FULFILLED:
			return {
				...action.payload,
				...state
			}
		case types.FETCH_POSTS_REJECTED:
			return {
				...state
			}
		default:
			return state;
	}
}

const posts = combineReducers({
	byId,
	isFetching
})

export default posts