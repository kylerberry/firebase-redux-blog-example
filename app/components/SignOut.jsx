import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { Redirect } from 'react-router-dom'
import * as authActions from '../actions/auth'

class SignOut extends React.Component {
	componentWillMount() {
		const { signOut, history } = this.props
		signOut()
	}

	componentDidUpdate() {
		const { auth, history } = this.props
		const { user } = auth
		if (!auth.isPending && !user.id) {
			history.replace('/')
		}
	}

	render() {
		return null
	}
}

const mapStateToProps = ({ auth }, { history }) => ({
	auth,
	history
})

SignOut = withRouter(connect(
	mapStateToProps,
	{
		signOut : authActions.signOut
	}
)(SignOut))

export default SignOut
