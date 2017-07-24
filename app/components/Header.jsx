import React from 'react'
import * as authActions from '../actions/auth'
import * as flashActions from '../actions/flash'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import {
	AppBar,
	IconMenu,
	IconButton,
	MenuItem,
	FlatButton,
	RaisedButton
} from 'material-ui'

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const cleanHeaderRoutes = {
	'/sign_in' : true,
	'/sign_up' : true,
	'/sign_out' : true
}

const MainLink = (props) => {
	return (
		<Link to="/" style={{
			color: '#fff',
			textDecoration: 'none'
		}}>Firebase + Redux</Link>
	)
}

const LoggedMenu = ({ history }) => 
	<IconMenu iconButtonElement={
	      <IconButton>
	      	<MoreVertIcon />
	      </IconButton>
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

const Login = ({ history }) => {
	if (cleanHeaderRoutes[location.pathname]) {
		return null
	}

	return (
		<span>
			<FlatButton
				onTouchTap={e => {
					e.preventDefault()
					history.push('/sign_in')
				}} label="Sign in"
				style={{ color: '#fff' }}
			/>
			<RaisedButton onTouchTap={e => {
					e.preventDefault()
					history.push('/sign_up')
				}} label="Sign up"
			/>
		</span>
		
	)
}

//Lets MUI know that this is a composed component
Login.muiName = 'FlatButton'

class Header extends React.Component {
	//Lets MUI know that this is a composed component (statically)
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
			<AppBar title={ <MainLink /> }
				showMenuIconButton={false}
				iconElementRight={user.id
					? <LoggedMenu history={ history } /> 
					: <Login history={ history } />
				}
				iconStyleRight={{
					marginTop: '.8rem'
				}}
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