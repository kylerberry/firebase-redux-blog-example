import * as types from './constants'
import { FirebaseAuth } from '../api/Firebase'

/**
* gets an authorized user's profile info and jwt
* 
* @param {Object} user | Firebase.User Interface returned by onAuthStateChanged promise
*/
export const getAuthUser = user => ({
	type: types.GET_AUTHORIZED_USER,
	payload: new Promise(resolve => {
		user.getIdToken(true).then(jwt => {
			resolve({ ...user, jwt })
		})
	})
})

/**
* removes an authorized user's information & jwt from app state
*/
export const removeAuthUser = () => ({
	type: types.REMOVE_AUTHORIZED_USER
})

/**
* Watches the auth state of the current user
*/
export const fetchAuthRealtime = () => dispatch => {
	FirebaseAuth.onAuthStateChanged(user => {
		if (user) {
			dispatch(getAuthUser(user))
		} else {
			dispatch(removeAuthUser())
		}
	})
}

/**
* Sign IN an existing user
* @param {String} email
* @param {String} password
*/
export const signIn = (email, password) => {
	const promise = new Promise((resolve, reject) => {
		FirebaseAuth.signInWithEmailAndPassword(email, password)
			.then(resolve)
			.catch(reject)
	})

	return {
		type: types.SIGN_IN,
		payload: promise,
		error: promise.error
	}
}

/**
* Sign OUT an existing user
*/
export const signOut = () => {
	const promise = new Promise((resolve, reject) => {
		try {
			FirebaseAuth.signOut().then(resolve)
		} catch (e) {
			reject(e)
		}
	})

	return {
		type: types.SIGN_OUT,
		payload: promise,
		error: promise.error
	}
}

/**
* Create an authorized user
*
* @param {String} email
* @param {String} password
*/
export const createAuth = (email, password) => {
	const promise = new Promise((resolve, reject) => {
		FirebaseAuth.createUserWithEmailAndPassword(email, password)
			.then(resolve)
			.catch(reject)
	})

	return {
		type: types.CREATE_AUTH,
		payload: promise,
		error: promise.error
	}
}