import * as types from './constants'
import { FirebaseDb } from '../api/Firebase'

const rootRef = FirebaseDb.ref()
const postsRef = rootRef.child('posts')

// fetches once
export const fetchPosts = () => ({
	type: types.FETCH_POSTS,
	payload: new Promise(resolve => {
		postsRef.once('value', snapshot => {
			resolve(snapshot.val())
		})
	})
})

// fetches on every update
export const fetchPostsRealtime = () => dispatch => {
	postsRef.on('value', snapshot => {
		dispatch({
			type: types.FETCH_POSTS,
			payload: new Promise(resolve => {
				postsRef.on('value', snapshot => {
					resolve(snapshot.val())
				})
			})
		})
	})
}