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

const MenuItemLink = ({ to, text }) => 
	<Link to={to} style={{ textDecoration: 'none' }}>
		<MenuItem primaryText={text}/>
	</Link>

const Greet = ({ user }) => 
	<div style={{
		color: '#fff',
		float: 'left',
		paddingTop: '1em'
	}}>Hi, { user.displayName }</div>

const LoggedMenu = ({ history, user }) => 
	<div>
		<Greet user={user} />
		<IconMenu iconButtonElement={
		      <IconButton iconStyle={{ color: '#fff' }}>
		      	<MoreVertIcon />
		      </IconButton>
		    }
		    targetOrigin={{horizontal: 'right', vertical: 'top'}}
			anchorOrigin={{horizontal: 'right', vertical: 'top'}}
		>
			<MenuItemLink to="/create" text="Create" />
			<MenuItemLink to="/sign_out" text="Sign Out" />
		</IconMenu>
	</div>
	

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
					? <LoggedMenu history={ history } user={user} />
					: <Login history={ history } />
				}
				iconStyleRight={{
					marginTop: user.id ? '.5rem' : '.8rem'
				}}
			>
			</AppBar>
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