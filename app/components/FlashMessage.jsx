import React from 'react'

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
		<div className="flash { typeClass }">
			{ message }
			<span onClick={e => {
				e.preventDefault()
				onClickHandler()
			}}>×</span>
		</div>
	)
}

export default FlashMessage