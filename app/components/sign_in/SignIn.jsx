import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

import * as authActions from '../../actions/auth'

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

import { Tabs, Tab, Paper } from 'material-ui'

// need to convert these to sass
import '../../../app/styles/_sign-in.css'

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
		const { auth : { user }, router } = this.props
		const { history } = router

		//if user is logged in, redirect home
		if (user.id) {
			return <Redirect exact to="/" />
		}

		let tabIndex = location.pathname == '/sign_in' ? 0 : 1

		return (
			<div className="auth-panel row center-xs center-sm">
				<Tabs className="col-xs-12 col-sm-6 col-md-4"
					initialSelectedIndex={tabIndex}>
					<Tab label="Sign in"
						onActive={() => {
							history.replace('/sign_in')
						}}>
						<SignInForm onSubmit={ this.submitSignIn } />
					</Tab>
					<Tab label="Sign up"
						onActive={() => {
							history.replace('/sign_up')
						}}>
						<SignUpForm onSubmit={ this.submitSignUp } />
					</Tab>
				</Tabs>
			</div>
		)
	}
}
const mapStateToProps = ({ auth }, router) => ({
	auth,
	router
})

SignIn = withRouter(connect(
	mapStateToProps,
	{ ...authActions }
)(SignIn))

export default SignIn