import React from 'react'
import * as authActions from '../actions/auth'
import * as flashActions from '../actions/flash'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import FlashMessage from './FlashMessage'

const cleanHeaderRoutes = {
	'/sign_in' : true,
	'/sign_up' : true,
	'/sign_out' : true
}

// @todo quick & dirty
// remember presentational vs logic components
const Greet = ({
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
}

class Header extends React.Component {
	render() {
		const {
			auth,
			location,
			flash,
			dismissFlash
		} = this.props

		return (
			<div>
				<Link to="/"><h1>Firebase + Redux</h1></Link>
				<Greet { ...this.props } />
				<SignInOutButton { ...this.props } />
				<FlashMessage onClickHandler={ dismissFlash }
					{ ...flash }
				/>
			</div>
		)
	}
}

const mapStateToProps = ({ auth, flash }, { location }) => ({
	location,
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