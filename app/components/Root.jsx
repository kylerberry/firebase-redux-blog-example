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
import UnsavedChangesDialog from './UnsavedChangesDialog'

// theme our dialog outside of the AppContainer
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

// themes a component that gets rendered outside the main app
// @todo make this a reusable HOC
class ThemedDialog extends React.Component {
	render() {
		const { message, callback, unmountDialogHandler } = this.props
		return (
			<MuiThemeProvider>
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
			// reliably remove the dialog and reset it's internal state
			const unmountDialog = () => {
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
