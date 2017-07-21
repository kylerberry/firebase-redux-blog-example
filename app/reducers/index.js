import { combineReducers } from 'redux'
import posts from './posts'
import auth from './auth'
import location from './route'
import flash from './flash'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
	posts,
	auth,
	form: formReducer,
	location,
	flash
})