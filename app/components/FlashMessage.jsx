import React from 'react'
import { Paper } from 'material-ui'
import * as styles from 'material-ui/styles/colors'
import { NavigationClose } from 'material-ui/svg-icons'
import IconButton from 'material-ui/IconButton';

const messageTypes = {
	'info' : 'info',
	'error' : 'error',
	'success' : 'success'
}

const FlashMessage = ({ message, type, onClickHandler }) => {
	if (!message) {
		return null
	}

	const typeClass = messageTypes[type] ? messageTypes[type] : ''
	return (
		<Paper rounded={false}
			style={{
				backgroundColor: styles.deepOrange500,
				overflow: 'hidden',
				paddingLeft: '1.5em'
			}}
			>
			<p style={{
				float: 'left'
			}}>{ message }</p>
			<IconButton onTouchTap={e => {
					e.preventDefault()
					onClickHandler()
				}}
				style={{
					float: 'right'
				}}>
				<NavigationClose />
			</IconButton>
		</Paper>
	)
}

FlashMessage.muiName = 'Paper'

export default FlashMessage