import React from 'react'
import { Provider } from 'react-redux'
// @todo import Top Level Component
import { Route, BrowserRouter as Router } from 'react-router-dom'

const Root = ({ store }) => {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/" />
			</Router>
		</Provider>
	)
}

export default Root
