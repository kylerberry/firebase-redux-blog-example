import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import SignIn from './sign_in'
import SignOut from './SignOut' // this should go to a route, not an action
import ViewPost from './ViewPost'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import PrivateRoute from './PrivateRoute'
import PostsList from './PostsList'

const Root = ({ store }) => 
	<Provider store={store}>
		<Router>
			<App>
				<Route exact path="/" component={PostsList} />
				<Route path="/sign_in" component={SignIn} />
				<Route path="/sign_up" component={SignIn} />
				<Route path="/post/:id" component={ViewPost} />
				<Route path="/sign_out" component={SignOut} />
				<PrivateRoute path="/edit/:id" component={EditPost} />
				<PrivateRoute path="/create" component={CreatePost} />
			</App>
		</Router>
	</Provider>



export default Root
