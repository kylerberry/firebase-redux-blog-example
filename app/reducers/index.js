import { combineReducers } from 'redux'
import posts from './posts'
import auth from './auth'
import { reducer as formReducer } from 'redux-form'
/**
* firebase with redux
*
* https://github.com/erikras/react-redux-universal-hot-example/issues/252
*/
export default combineReducers({
	posts,
	auth,
	form: formReducer
})