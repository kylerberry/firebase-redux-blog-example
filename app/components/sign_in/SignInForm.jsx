import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, RaisedButton, Paper } from 'material-ui'
import { renderTextField, required, email } from './helpers'

/**
	@todo Might be better to keep login/signup form state out of redux
	@Dan_Abramov - Ephemeral state in React, global state in Redux
*/

class SignInForm extends React.Component {
	componentWillUnmount() {
		this.props.reset('signin')
	}

	render () {
		const { pristine, submitting, handleSubmit, required } = this.props
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
						<Field type="password"
							component={renderTextField}
							name="password"
							placeholder="password"
							label="password"
							validate={[required]}
						/>
					</div>
					<RaisedButton disabled={pristine || submitting}
						style={{
							marginTop: '1em'
						}}
						type="submit"
						label="Sign in"
						primary={true}
					/>
				</form>
			</Paper>
		)
	}
}

export default reduxForm({
	form: 'signin',
	required,
	email
})(SignInForm)