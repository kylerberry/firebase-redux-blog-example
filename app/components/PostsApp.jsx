import React from 'react'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import posts from '../reducers'

class PostsApp extends React.Component {
	componentDidMount() {
		const { fetchPosts } = this.props
		fetchPosts();
	}

	render () {
		return (<h1>Hello Posts!</h1>)
	}
}

// Move this to the Posts Component
// ...just testing hooking up the store
// ...make ContainerComponents
// @todo define getPosts reducer
const mapStateToProps = (state) => ({
	posts
})

PostsApp = connect(
	mapStateToProps,
	actions
)(PostsApp)

export default PostsApp