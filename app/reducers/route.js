import * as types from '../actions/constants'

const initialState = {
	hash: '',
	key: '',
	pathname: '/',
	search: '',
	state: undefined
}

const location = (state = initialState, action) => {
	switch (action.type) {
		case types.ROUTE_CHANGE:
			return {
				...state,
				...action.payload
			}
		default:
			return state
	}
}

export default location