import rootReducer from './reducers/'

import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import { loadState } from './localStorage'

const configureStore = () => {
	const middlewares = [
		thunk,
		promiseMiddleware()
	]

	if (process.env.NODE_ENV !== 'production') {
		middlewares.push(createLogger())
	}

	return createStore(
		rootReducer,
		loadState(),
		applyMiddleware(...middlewares)
	)	
}

export default configureStore