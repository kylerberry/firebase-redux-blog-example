import * as types from './constants'
import { FirebaseDb } from '../api/Firebase'

// @todo extract firebase api methods out of the action creators
const rootRef = FirebaseDb.ref()
const postsRef = rootRef.child('posts')

/**
* Fetches Posts Once
*
* @return {Object}
*/
export const fetchPosts = () => ({
	type: types.FETCH_POSTS,
	payload: new Promise(resolve => {
		postsRef.once('value', snapshot => {
			resolve(snapshot.val())
		})
	})
})

/**
* Fetches Posts On Every Update
*
* @return {Thunk}
*/
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

/**
* Create a Post
*
* @param {Object} data
* @param {Object}
*/
export const createPost = data => {
	const post = {
		id: postsRef.push().key,
		...data
	}

	const promise = new Promise((resolve, reject) => {
		try {
			rootRef.update({
		        [`posts/${post.id}`] : post
		        // @todo will need this after auth
		        // [`user_posts/${user.id}/${post.id}`] : post
		    }).then(resolve)
		} catch (e) {
			reject(e.message)
		}
	})

    return {
    	type: types.CREATE_POST,
    	payload: promise,
    	error: promise.error
    }
}

/**
* Delete a Post
*
* @param {String} id
* @return {Object}
*/

export const deletePost = id => {
	const promise = new Promise((resolve, reject) => {
		const postRef = postsRef.child(id)
		try {
			postRef.remove().then(resolve)
		} catch (e) {
			reject(e.message)
		}
	})

	return {
		type: types.DELETE_POST,
		payload: promise,
		error: promise.error
	}
}