import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { TextField, RaisedButton, Paper } from 'material-ui'
import { renderTextField, required } from '../sign_in/helpers'

class CreateForm extends React.Component {
	render () {
		const { pristine, submitting, handleSubmit, required } = this.props
		return (
			<form onSubmit={handleSubmit}>
				<div>
					<Field type="text"
						component={renderTextField}
						name="title"
						placeholder="title"
						label="title"
						validate={[required]}
					/>
				</div>
				<RaisedButton disabled={pristine || submitting}
					style={{
						marginTop: '1em'
					}}
					type="submit"
					label="Create Post"
					primary={true}
				/>
			</form>
		)
	}
}

export default reduxForm({
	form: 'create_post',
	required
})(CreateForm)