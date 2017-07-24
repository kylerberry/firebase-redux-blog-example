import React from 'react'
import { Paper } from 'material-ui'
import * as styles from 'material-ui/styles/colors'
import { NavigationClose } from 'material-ui/svg-icons'
import IconButton from 'material-ui/IconButton';

const messageTypes = {
	'info' : { label: 'info', color: styles.cyan700 },
	'error' : { label: 'error', color: styles.orange700 },
	'success' : { label: 'success', color: styles.lightGreen500 }
}

const FlashMessage = ({ message, type, onClickHandler }) => {
	if (!message) {
		return null
	}

	const typeClass = messageTypes[type] ? messageTypes[type].label : ''
	return (
		<Paper rounded={false}
			style={{
				backgroundColor: messageTypes[type].color,
				overflow: 'hidden',
				paddingLeft: '1.5em',
				color: '#fff',
				position: 'relative'
			}}
			>
			<p style={{
				textAlign: 'center'
			}}>{ message }</p>
			<IconButton onTouchTap={e => {
					e.preventDefault()
					onClickHandler()
				}}
				iconStyle={{color: styles.white}}
				style={{
					position: 'absolute',
					top: '0',
					right: '0'
				}}>
				<NavigationClose />
			</IconButton>
		</Paper>
	)
}

FlashMessage.muiName = 'Paper'

export default FlashMessage