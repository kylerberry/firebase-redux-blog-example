import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import AppContainer from './AppContainer'
import SignIn from './sign_in'
import CreatePost from './post_create'

import SignOut from './SignOut'
import ViewPost from './ViewPost'
import EditPost from './EditPost'
import PrivateRoute from './PrivateRoute'
import PostsList from './PostsList'

const Root = ({ store }) => 
	<Provider store={store}>
		<Router>
			<AppContainer>
				<Route exact path="/" component={PostsList} />
				<Route exact path="/sign_in" component={SignIn} />
				<Route exact path="/sign_up" component={SignIn} />
				<Route exact path="/sign_out" component={SignOut} />
				
				<PrivateRoute exact path="/create" component={CreatePost} />
			</AppContainer>
		</Router>
	</Provider>

	/*<Route exact path="/post/:id" component={ViewPost} />
	<PrivateRoute exact path="edit/:id" component={EditPost} />*/

export default Root
