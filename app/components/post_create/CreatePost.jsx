import React from 'react'
import * as postActions from '../../actions/post'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CreateForm from './CreateForm'

// @todo need to Authenticate AND Authorize
// this will be the job of jwt

class CreatePost extends React.Component {

	render () {
		const { createPost, auth } = this.props
		return <CreateForm handleSubmit={createPost} />

	}
}

const mapStateToProps = state => ({
	auth : { ...state.auth }
})

CreatePost = connect(
	mapStateToProps,
	{ ...postActions }
)(CreatePost)

export default CreatePost