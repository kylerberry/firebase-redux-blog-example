import * as types from './constants'

export const routeChange = (location) => ({
	type: types.ROUTE_CHANGE,
	payload: new Promise(resolve => {
		resolve(location)
	})
})