import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

import * as authActions from '../../actions/auth'

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'


class Login extends React.Component {
	submitSignIn = (values) => {
		const { signIn } = this.props
		signIn(values.email, values.password)
	}

	submitSignUp = (values) => {
		console.log(values)
	}

	render() {
		const { formType } = this.props
		return (
			<div>
				<NavLink exact to="/login#signup" className="tab" activeClassName="tab--active">Sign Up</NavLink>
				<NavLink exact to="/login" className="tab" activeClassName="tab--active" >Sign In</NavLink>
				{ formType == 'signup'
					? <SignUpForm onSubmit={ this.submitSignUp } />
					: <SignInForm onSubmit={ this.submitSignIn } />
				}
			</div>
		)
	}
}

const mapStateToProps = (state, { location : { hash } }) => ({
	formType: hash.replace('#', '')
})

Login = connect(
	mapStateToProps,
	{ ...authActions }
)(Login)

export default Login