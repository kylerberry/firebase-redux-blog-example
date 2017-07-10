import React from 'react'
import * as authActions from '../actions/auth'

import { connect } from 'react-redux'

// @todo quick & dirty
// remember presentational vs logic components
const Greet = ({ isAuthorized, user }) => {
	if (isAuthorized) {
		return (
			<span>
				<span>Hello, { user.displayName } </span>
				 <button>Sign Out</button>
			</span>
		)
	} else {
		return (
			<span>
				<span>Hello</span>
				 <button>Sign Out</button>
			</span>
		)
	}
}

class Header extends React.Component {
	componentDidMount() {
		const { fetchAuthRealtime } = this.props
		fetchAuthRealtime()
	}
	render() {
		const { auth } = this.props
		return (
			<div>
				<h1>Firebase + Redux</h1>
				<Greet {...auth} />
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: { ...state.auth }
})

Header = connect(
	mapStateToProps,
	{ ...authActions } 
)(Header)

export default Header