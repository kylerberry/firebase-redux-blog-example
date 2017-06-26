import React from 'react'
import { Provider } from 'react-redux'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import App from './App'
import Index from './Index'
import Login from './Login'
import Logout from './Logout'
import ViewPost from './ViewPost'
import CreatePost from './CreatePost'
import EditPost from './EditPost'
import Auth from './Auth'

/*
Routes: {
	'/' : {
		'App' : {
			'/' : 'Index'
			'login' : 'Login',
			'post/:id' : 'ViewPost',

			'Auth' : {
				'logout' => 'Logout',
				'edit/:id' => 'EditPost',
				'create' => 'CreatePost'
			}
		}
	}
}
*/

const Root = ({ store }) => 
	<Provider store={store}>
		<Router>
			<Route path="/" component={App}>
				<Route component={Index}/>
				<Route path="login" component={Login}/>
				<Route path="post/:id" component={ViewPost} />
				
				<Route component="Auth">
					<Route path="logout" component={Logout}/>
					<Route path="edit/:id" component={EditPost} />
					<Route path="create" component={CreatePost} />
				</Route>
			</Route>
		</Router>
	</Provider>



export default Root
