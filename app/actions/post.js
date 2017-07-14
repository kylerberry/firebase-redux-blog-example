import * as types from './constants'
import { FirebaseDb } from '../api/Firebase'

// @todo extract firebase api methods out of the action creators
const rootRef = FirebaseDb.ref()
const postsRef = rootRef.child('posts')
const userPostsRef = rootRef.child('user_posts')

/**
* Fetches Posts Once
*
* @return {Object}
*/
export const fetchPosts = () => ({
	type: types.FETCH_POSTS,
	payload: new Promise((resolve, reject) => {
		try {
			postsRef.once('value', snapshot => {
				resolve(snapshot.val())
			})
		} catch (e) {
			reject(e.message)
		}
		
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
			payload: new Promise((resolve, reject) => {
				try {
					postsRef.on('value', snapshot => {
						resolve(snapshot.val())
					})
				} catch (e) {
					reject(e.message)
				}
				
			})
		})
	})
}

/**
* Create a Post
*
* @param {Object} data
*/
export const createPost = data => {
	const post = {
		id: postsRef.push().key,
		...data
	}

	const promise = new Promise((resolve, reject) => {
		try {
			rootRef.update({
		        [`posts/${post.id}`] : post,
		        [`user_posts/${post.uid}/${post.id}`] : post
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
* @param {String} userId
* @return {Object}
*/
export const deletePost = (userId, id) => {
	const promise = new Promise((resolve, reject) => {
		try {
			rootRef.update({
		        [`posts/${id}`] : null,
		        [`user_posts/${userId}/${id}`] : null
		    }).then(resolve)
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