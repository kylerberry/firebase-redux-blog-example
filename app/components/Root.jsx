import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import PostsApp from './PostsApp'

const Root = ({ store }) => {
	return (
		<Provider store={store}>
			<Router>
				<Route path="/" component={PostsApp}/>
			</Router>
		</Provider>
	)
}

export default Root
