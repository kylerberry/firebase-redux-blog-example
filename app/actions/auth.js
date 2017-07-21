import * as types from './constants'
import { FirebaseAuth, FirebaseDb } from '../api/Firebase'

const rootRef = FirebaseDb.ref()
const usersRef = rootRef.child('users')

/**
* Sign IN an existing user
* @param {String} email
* @param {String} password
*/
export const signIn = (email, password) => dispatch => {
	dispatch({
		type: types.SIGN_IN_PENDING
	})

	try {
		FirebaseAuth.signInWithEmailAndPassword(email, password)
			.then(user => {
				dispatch({
					type: types.SIGN_IN_FULFILLED,
					payload: user
				})
			})
			.catch(e => {
				dispatch({
					type: types.SIGN_IN_REJECTED,
					error: e.message
				})
			})
	} catch (e) {
		dispatch({
			type: types.SIGN_IN_REJECTED,
			error: e.message
		})
	}
}

/**
* Sign OUT an existing user
*/
export const signOut = () => ({
	type: types.SIGN_OUT,
	payload: new Promise(resolve => {
		FirebaseAuth.signOut().then(resolve)
	})
})

/**
* Sign UP a NEW user
* @todo refactor to use `await`
*
* @param {String} email
* @param {String} password
*/
export const signUp = (email, password) => dispatch => {
	dispatch({
		type: types.CREATE_USER_PENDING
	})

	FirebaseAuth.createUserWithEmailAndPassword(email, password)
		.then(user => {
			const { email, displayName, provider, uid } = user
			const newUser = {
				id: uid,
				role_id: 20,
				provider: user.providerData[0].providerId,
				email,
				displayName
			}

			//create new user index by uid
			rootRef.update({[`users/${uid}`] : newUser}).then(() => {
		    	dispatch({
		    		type: types.CREATE_USER_FULFILLED,
		    		payload: newUser
		    	})
		    }).catch(e => {
		    	dispatch({
					type: types.CREATE_USER_REJECTED,
					error: e.message
				})
		    })
		})
		.catch(e => {
			dispatch({
				type: types.CREATE_USER_REJECTED,
				error: e.message
			})
		})
}

/**
* delete the current user from DB
* remove auth from state
* 
* @return void
*/
export const deleteUser = () => dispatch => {
	const user = FirebaseAuth.currentUser
	if (!user) {
		return
	}

	dispatch({
		type: types.DELETE_USER_PENDING
	})

	//remove user record
	usersRef.child(user.uid).remove()
		.then(() => {
			//remove user auth
			user.delete().then(() => {
				dispatch({
					type: types.DELETE_USER_FULFILLED
				})
			}).catch(e => {
				dispatch({
					type: types.DELETE_USER_REJECTED,
					error: e.message
				})
			})
		})
		.catch(e => {
			dispatch({
				type: types.DELETE_USER_REJECTED,
				error: e.message
			})
		})
}