import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import Login from './login'
import Logout from './Logout'
import ViewPost from './ViewPost'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import Auth from './Auth'
import PrivateRoute from './PrivateRoute'
import PostsList from './PostsList'

const Root = ({ store }) => 
	<Provider store={store}>
		<Router>
			<App>
				<Route exact path="/" component={PostsList} />
				<Route path="/login" component={Login}>
					<Route path=":action" />
				</Route>

				<Route path="/post/:id" component={ViewPost} />
				<PrivateRoute path="/logout" component={Logout} />
				<PrivateRoute path="/edit/:id" component={EditPost} />
				<PrivateRoute path="/create" component={CreatePost} />
			</App>
		</Router>
	</Provider>



export default Root
