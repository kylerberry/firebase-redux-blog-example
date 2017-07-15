import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { withRouter } from 'react-router'

import * as authActions from '../../actions/auth'

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

// TEST ONLY
const DeleteUser = ({ onClick }) => {
	return (<a href="" onClick={(e) => {
		e.preventDefault()
		onClick()
	}} >DELETE ME</a>)
}


class Login extends React.Component {
	submitSignIn = values => {
		const { signIn } = this.props
		signIn(values.email, values.password)
	}

	submitSignUp = values => {
		const { signUp } = this.props
		// @todo validate fields
		signUp(values.email, values.password)
	}

	componentWillUpdate({ auth, history }) {
		const { user } = auth
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
		const { formType, location, deleteUser } = this.props
		return (
			<div>
				<NavLink exact to="/login#signup" className="tab" activeClassName="tab--active">Sign Up</NavLink>
				<NavLink exact to="/login" className="tab" activeClassName="tab--active" >Sign In</NavLink>
				{ formType == 'signup'
					? <SignUpForm onSubmit={ this.submitSignUp } />
					: <SignInForm onSubmit={ this.submitSignIn } />
				}
				<DeleteUser onClick={deleteUser} />
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