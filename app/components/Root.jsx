import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'

import AppContainer from './AppContainer'
import SignIn from './sign_in'
import CreatePost from './post_create'

import SignOut from './SignOut'
import ViewPost from './ViewPost'
import EditPost from './EditPost'
import PrivateRoute from './PrivateRoute'
import PostsList from './PostsList'
import { MuiThemeProvider, FlatButton, Dialog } from 'material-ui'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme'
const muiTheme = getMuiTheme(lightBaseTheme)

class UnsavedChangesDialog extends React.Component {

	render() {
		const {
			message,
			callback,
			unmountDialogHandler
		} = this.props

		const actions = [
			<FlatButton
		        label="Cancel"
		        onTouchTap={() => {
		        	unmountDialogHandler()
		        	callback(false)
		        }}
	      	/>,
	      	<FlatButton
		        label="Leave"
		        primary={true}
		        onTouchTap={() => {
		        	unmountDialogHandler()
		        	callback(true)
		        }}
	      	/>
		]

		return (
			<Dialog modal={false} 
				actions={actions}
				open={true}
			>
				{ message }
			</Dialog>
		)
	}
}

// themes a component that gets rendered outside the main app
class ThemedDialog extends React.Component {

	render() {
		const { message, callback, unmountDialogHandler } = this.props
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<UnsavedChangesDialog message={message}
					unmountDialogHandler={unmountDialogHandler}
					callback={callback}
				/>
			</MuiThemeProvider>
		)
	}
}
	

const Root = ({ store }) => 
	<Provider store={store}>
		<Router getUserConfirmation={(message, callback) => {
			const unmountDialog = () => {
				// @todo figure out why im getting following error:
				/**
				* Cannot read property 'getChildContext' of null
				*/
				ReactDOM.unmountComponentAtNode(document.getElementById('messages'))
			}

			ReactDOM.render(
				<ThemedDialog message={message}
					callback={callback}
					unmountDialogHandler={unmountDialog}
				/>,
				document.getElementById('messages')
			)
		}}>
			<AppContainer>
				<Switch>
					<Route exact path="/" component={PostsList} />
					<Route path="/sign_in" component={SignIn} />
					<Route path="/sign_up" component={SignIn} />
					<Route path="/sign_out" component={SignOut} />

					<PrivateRoute exact path="/create" component={CreatePost} />
				</Switch>
			</AppContainer>
		</Router>
	</Provider>

export default Root
