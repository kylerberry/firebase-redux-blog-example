import React from 'react'
import { Field, reduxForm } from 'redux-form'

class SignUpForm extends React.Component {
	render () {
		const { pristine, submitting, handleSubmit } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<Field type="text" component="input" name="email" placeholder="email" />
				</div>
				<div>
					<Field type="text" component="input" name="email_verify" placeholder="re-type email" />
				</div>
				<div>
					<Field type="password" component="input" name="password" placeholder="password" />
				</div>
				<div>
					<Field type="password" component="input" name="password_verify" placeholder="re-type password" />
				</div>
				<button type="submit" disabled={pristine || submitting}>Sign Up</button>
			</form>
		)
	}
}

export default SignUpForm = reduxForm({
	form: 'signup'
})(SignUpForm)