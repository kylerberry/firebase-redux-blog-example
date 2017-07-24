import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { RaisedButton, Paper } from 'material-ui'
import {
	renderTextField,
	required,
	email,
	matchField
} from './helpers'

class SignUpForm extends React.Component {
	componentWillUnmount() {
		this.props.reset('signin')
	}
	
	render () {
		const { pristine, submitting, handleSubmit } = this.props
		return (
			<Paper style={{ padding: '1.5em', paddingTop: '0' }}>
				<form onSubmit={handleSubmit}>
					<div>
						<Field type="text"
							component={renderTextField}
							name="email"
							placeholder="email"
							label="email"
							validate={[required, email]}
						/>
					</div>
					<div>
						<Field type="text"
							component={renderTextField}
							name="email_verify"
							placeholder="Re-type email"
							label="Re-type email"
							validate={[matchField('email')]}
						/>
					</div>
					<div>
						<Field type="password"
							component={renderTextField}
							name="password"
							placeholder="password"
							label="password"
							validate={[required]}
						/>
					</div>
					<div>
						<Field type="password"
							component={renderTextField}
							name="password_verify"
							placeholder="Re-type password"
							label="Re-type password"
							validate={[required, matchField('password')]}
						/>
					</div>
					<RaisedButton disabled={pristine || submitting}
						style={{
							marginTop: '1em'
						}}
						type="submit"
						label="Sign up"
						primary={true}
					/>
				</form>
			</Paper>
		)
	}
}

export default SignUpForm = reduxForm({
	form: 'signup',
	required,
	email,
	matchField
})(SignUpForm)