import {
	FETCH_POSTS,
	FETCH_POSTS_PENDING,
	FETCH_POSTS_FULFILLED,
	FETCH_POSTS_REJECTED
} from './constants'
import { FirebaseDb } from '../api/Firebase'

const rootRef = FirebaseDb.ref()
const postsRef = rootRef.child('posts')

export const fetchPosts = () => dispatch => {
	dispatch({
		type: FETCH_POSTS_PENDING,
	})
	
	return postsRef.on('value', snapshot => {
		dispatch({
			type: FETCH_POSTS_FULFILLED,
			payload: snapshot.val()
		})
	},
	error => {
		dispatch({
			type: FETCH_POSTS_REJECTED,
			payload: snapshot.val()
		})
	})
}

// ? should i call just fetch_posts?
// fetch_posts -> fetch_pending -> (success) -> fetch_fulfilled
// 								-> (error) -> fetch_rejected