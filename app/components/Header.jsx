import React from 'react'
import * as authActions from '../actions/auth'
import * as flashActions from '../actions/flash'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import { AppBar, IconMenu, IconButton, MenuItem, FlatButton } from 'material-ui'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const cleanHeaderRoutes = {
	'/sign_in' : true,
	'/sign_up' : true,
	'/sign_out' : true
}

// @todo quick & dirty
// remember presentational vs logic components
/*const Greet = ({
	auth,
	location
}) => {
	const { user } = auth;
	if (!user.id) {
		return null;
	}
	return (
		<span>Hello, { user.displayName }</span>
	)
}

const SignInOutButton = ({
	auth,
	location
}) => {
	const { user } = auth

	if (cleanHeaderRoutes[location.pathname]) {
		return null
	}

	return (
		<span>
			{
				user.id
				? <a href="/sign_out">Sign Out</a>
				: <Link to="/sign_in">Sign In</Link>
			}
		</span>
	)
}*/

const LoggedMenu = ({ history }) => 
	<IconMenu iconButtonElement={
	      <IconButton><MoreVertIcon /></IconButton>
	    }
	    targetOrigin={{horizontal: 'right', vertical: 'top'}}
		anchorOrigin={{horizontal: 'right', vertical: 'top'}}
	>
		<MenuItem primaryText="Sign out" onTouchTap={e => {
			e.preventDefault()
			history.push('/sign_out')
		}}	/>
	</IconMenu>

//Lets MUI know that this is a composed component
LoggedMenu.muiName = 'IconMenu'

const Login = ({ history }) => 
	<FlatButton
		onTouchTap={e => {
			e.preventDefault()
			history.push('/sign_in')
		}} label="Login"
	/>

//Lets MUI know that this is a composed component
Login.muiName = 'FlatButton'

class Header extends React.Component {
	static muiName = 'AppBar'

	render() {
		const {
			auth,
			flash,
			dismissFlash,
			history
		} = this.props

		const { user } = auth

		return (
			<AppBar title={ <Link to="/">Firebase + Redux</Link> }
				showMenuIconButton={false}
				iconElementRight={user.id ? <LoggedMenu history={ history } /> : <Login history={ history } />}
			/>
		)
	}
}

const mapStateToProps = ({ auth, flash }, { history }) => ({
	history,
	flash,
	auth
})

Header = withRouter(connect(
	mapStateToProps,
	{ 
		...authActions,
		...flashActions
	} 
)(Header))

export default Header