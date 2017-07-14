import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

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

	componentWillUpdate({ auth, history }) {
		const { user } = auth
		//catch updated auth here and redirect
		if (!user.jwt) {
			if (auth.error) {
				// show error
			}
			return
		}
		history.push('/')
	}

	// @todo figure out how to make these tabs work with/without NavLink
	render() {
		const { formType, location } = this.props
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

//will need withRouter
const mapStateToProps = ({ auth }, { location : { hash } }) => ({
	formType: hash.replace('#', ''),
	auth
})

Login = withRouter(connect(
	mapStateToProps,
	{ ...authActions }
)(Login))

export default Login