import React from 'react'
import { FlatButton, Dialog } from 'material-ui'

class UnsavedChangesDialog extends React.Component {

	render() {
		const {
			message,
			callback,
			unmountDialogHandler
		} = this.props

		const actions = [
			<FlatButton
		        label="Cancel"
		        onTouchTap={() => {
		        	unmountDialogHandler()
		        	callback(false)
		        }}
	      	/>,
	      	<FlatButton
		        label="Leave"
		        primary={true}
		        onTouchTap={() => {
		        	unmountDialogHandler()
		        	callback(true)
		        }}
	      	/>
		]

		return (
			<Dialog modal={false} 
				actions={actions}
				open={true}
			>
				{ message }
			</Dialog>
		)
	}
}

export default UnsavedChangesDialog