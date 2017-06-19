import {
	FETCH_POSTS_PENDING,
	FETCH_POSTS_FULFILLED,
	FETCH_POSTS_REJECTED
} from '../actions/constants'

import { combineReducers } from 'redux'

/*
{
	posts : [],
	isFetching: false
}
*/

const isFetching = (state = false, action) => {
	switch (action.type) {
		case FETCH_POSTS_PENDING:
			return true
		default:
			return false
	}
}

const getPosts = (state = [], action) => {
	switch (action.type) {
		case FETCH_POSTS_FULFILLED:
			return {
				...action.payload,
				isFetching: false
			}
		case FETCH_POSTS_REJECTED:
			return {
				...state,
				isFetching: false
			}
		default:
			return state;
	}
}

const posts = combineReducers({
	posts: getPosts,
	isFetching
})

export default posts