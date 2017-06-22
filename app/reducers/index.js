import { combineReducers } from 'redux'
import posts from './posts'

/**
* firebase with redux
*
* https://github.com/erikras/react-redux-universal-hot-example/issues/252
*/
const rootReducer = combineReducers({
	posts
})

export default rootReducer