import React from 'react'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class CreatePost extends React.Component {

	render () {
		const { createPost } = this.props

		return <button onClick={() => {
			const now = new Date()
			createPost({
				content: 'test content',
				datetime: now.toISOString(),
				title: `title: ${now.toISOString()}`
			})
		}}>Create Post</button>
	}
}

/*const mapStateToProps = state => ({
	posts : { ...state.posts }
})
*/
CreatePost = connect(
	null,
	actions
)(CreatePost)

export default CreatePost