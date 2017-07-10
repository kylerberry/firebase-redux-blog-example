import * as types from './constants'
import { FirebaseAuth } from '../api/Firebase'


/**
* gets the current logged in user
*/
export const getAuth = () => ({
	type: types.GET_AUTH,
	payload: new Promise((resolve, reject) => {
		FirebaseAuth.onAuthStateChanged(user => {
			resolve(user)
		})
	})
})

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