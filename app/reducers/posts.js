import * as types from '../actions/constants'
import { combineReducers } from 'redux'
import _map from 'lodash/map'

const isFetching = (state = true, action) => {
	switch (action.type) {
		case types.FETCH_POSTS_PENDING:
			return true
		case types.FETCH_POSTS_FULFILLED:
		case types.FETCH_POSTS_REJECTED:
			return false
		default:
			return state
	}
}

const list = (state = [], action) => {
	switch (action.type) {
		case types.FETCH_POSTS_FULFILLED:
			return _map(action.payload, post => post.id)
		default:
			return state
	}
}

const byId = (state = {}, action) => {
	switch (action.type) {
		case types.FETCH_POSTS_FULFILLED:
			return {
				...action.payload
			}
		default:
			return state
	}
}

const error = (state = null, action) => {
	switch (action.type) {
		case types.FETCH_POSTS_REJECTED:
			return 'There was a problem fetching posts.'
		case types.FETCH_POSTS_PENDING:
		case types.FETCH_POSTS_FULFILLED:
			return null
		default:
			return state
	}
}

const posts = combineReducers({
	list,
	byId,
	isFetching,
	error
})

export default posts

// Selectors
export const getById = (state, id) => state.byId[id]