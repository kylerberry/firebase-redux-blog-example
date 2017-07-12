import React from 'react'
import * as authActions from '../actions/auth'

import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

// @todo quick & dirty
// remember presentational vs logic components
const Greet = ({
	auth,
	location
}) => {
	const { isAuthorized, user } = auth;
	if (!isAuthorized || location.pathname == '/login') {
		return null;
	}
	return (
		<span>
			<span>Hello, { user.displayName } </span>
		</span>
	)
}

const SignInOutButton = ({ auth, signOut, location }) => {
	const { isAuthorized } = auth
	if (location.pathname == '/login') {
		return null
	}
	return (
		<span>
			{
				isAuthorized
				? <a href="" onClick={signOut}>Sign Out</a>
				: <Link to="/login">Sign In</Link>
			}
		</span>
	)
}

class Header extends React.Component {
	componentDidMount() {
		const { fetchAuthRealtime } = this.props
		// @todo not sure if i really need this yet
		// fetchAuthRealtime() 
	}

	render() {
		const { auth, location, signOut } = this.props
		return (
			<div>
				<Link to="/"><h1>Firebase + Redux</h1></Link>
				<Greet { ...this.props } />
				<SignInOutButton { ...this.props } />
			</div>
		)
	}
}

const mapStateToProps = (state, { location }) => ({
	location,
	auth: { ...state.auth }
})

Header = withRouter(connect(
	mapStateToProps,
	{ ...authActions } 
)(Header))

export default Header