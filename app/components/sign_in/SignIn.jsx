import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import * as authActions from '../../actions/auth'

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

class SignIn extends React.Component {
	submitSignIn = values => {
		const { signIn } = this.props
		signIn(values.email, values.password)
	}

	submitSignUp = values => {
		const { signUp } = this.props
		// @todo validate fields
		signUp(values.email, values.password)
	}

	render() {
		const { formType, location, auth } = this.props
		const { user } = auth

		//if user is logged in, redirect home
		if (user.id) {
			return <Redirect exact to="/" />
		}

		return (
			<div>
				<NavLink exact to="/sign_up" className="tab" activeClassName="tab--active">Sign Up</NavLink>
				<NavLink exact to="/sign_in" className="tab" activeClassName="tab--active" >Sign In</NavLink>
				{ formType == 'sign_up'
					? <SignUpForm onSubmit={ this.submitSignUp } />
					: <SignInForm onSubmit={ this.submitSignIn } />
				}
			</div>
		)
	}
}

//will need withRouter
const mapStateToProps = ({ auth }, { location }) => ({
	formType: location.pathname.replace('/', ''),
	auth
})

SignIn = withRouter(connect(
	mapStateToProps,
	{ ...authActions }
)(SignIn))

export default SignIn