import * as types from './constants'
import { FirebaseDb } from '../api/Firebase'

const rootRef = FirebaseDb.ref()
const postsRef = rootRef.child('posts')

export const fetchPosts = () => ({
	type: types.FETCH_POSTS,
	payload: new Promise(resolve => {
		postsRef.on('value', snapshot => {
			resolve(snapshot.val())
		})
	})
})