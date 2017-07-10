import React from 'react'
import * as postActions from '../actions/post'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CreatePost extends React.Component {

	render () {
		const { createPost, auth } = this.props

		return <button onClick={() => {
			const now = new Date()
			createPost({
				content: 'test content',
				datetime: now.toISOString(),
				title: `title: ${now.toISOString()}`,
				uid: auth.user.id
			})
		}}>Create Post</button>
	}
}

const mapStateToProps = state => ({
	auth : { ...state.auth }
})

CreatePost = connect(
	mapStateToProps,
	postActions
)(CreatePost)

export default CreatePost