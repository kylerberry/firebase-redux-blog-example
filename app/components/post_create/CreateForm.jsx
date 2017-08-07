import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { RaisedButton, FlatButton, Paper } from 'material-ui'
import { renderTextField, renderCheckbox, required } from '../sign_in/helpers'

class CreateForm extends React.Component {

	componentDidMount() {
		const { history } = this.props
	}

	componentWillUnmount() {
		const { reset } = this.props
		reset('postcreate')
		if (typeof this.unblock == 'function') {
			this.unblock()
		}
	}

	render () {
		const { pristine, submitting, handleSubmit, required, history, dirty } = this.props

		if (dirty) {
			this.unblock = history.block('Your changes will be lost if you leave.')
		} else if (typeof this.unblock == 'function') {
			this.unblock()
		}

		return (

			<div>
				<h1 style={{ textAlign: 'left' }}>Create a Post</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<Field type="text"
							component={renderTextField}
							name="title"
							placeholder="title"
							label="title"
							fullWidth={true}
							validate={[required]}
							hintStyle={{ bottom: '10px' }}
							errorStyle={{ float: 'left' }}
						/>
					</div>
					<div>
						<Field type="textarea"
							component={renderTextField}
							name="body"
							placeholder="body"
							multiLine={true}
							label="body"
							fullWidth={true}
							validate={[required]}
							floatingLabelStyle={{ left: 0, opacity: 0 }}
							floatingLabelFocusStyle={{ left: 0 }}
							hintStyle={{ bottom: '12px' }}
							errorStyle={{ float: 'left' }}
						/>
					</div>
					<div style={{ overflow: 'hidden', marginTop: '1.5em' }}>
						<Field type="checkbox"
							component={renderCheckbox}
							name="allow_comments"
							label="Allow Comments"
							labelPosition="left"
							labelStyle={{ width: 'auto' }}
							style={{ marginTop: '1em' }}
						/>
					</div>
					<div>
						<RaisedButton disabled={pristine || submitting}
							style={{
								marginTop: '2em',
								marginLeft: '1em',
								float: 'right'
							}}
							type="submit"
							label="Create Post"
							primary={true}
						/>
						<RaisedButton style={{
								marginTop: '2em',
								float: 'right'
							}}
							label="Cancel"
							onTouchTap={() => {
								history.push('/')
							}}
						/>
					</div>
				</form>
			</div>
		)
	}
}

export default reduxForm({
	form: 'postcreate',
	required
})(CreateForm)