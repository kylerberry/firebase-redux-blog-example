import { FETCH_POSTS } from './constants'
import { FirebaseDb } from '../api/Firebase'

const rootRef = FirebaseDb.ref()
const postsRef = rootRef.child('posts')

export const fetchPosts = () => dispatch => {
	return postsRef.on('value', snapshot => {
		dispatch({
			type: FETCH_POSTS,
			payload: snapshot.val()
		})
	})
}