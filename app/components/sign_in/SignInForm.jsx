import React from 'react'
import { Field, reduxForm } from 'redux-form'

class SignInForm extends React.Component {
	render () {
		const { pristine, submitting, handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<Field type="text" component="input" name="email" placeholder="email" />
				</div>
				<div>
					<Field type="password" component="input" name="password" placeholder="password" />
				</div>
				<button type="submit" disabled={pristine || submitting}>Sign In</button>
			</form>
		)
	}
}

export default SignInForm = reduxForm({
	form: 'signin'
})(SignInForm)