import React from 'react'
import * as postActions from '../actions/post'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// @todo make a PostPreview Component

class PostsList extends React.Component {

	componentWillMount() {
		const { fetchPostsRealtime } = this.props
		fetchPostsRealtime()
	}

	render () {
		const {
			deletePost,
			posts : {
				isFetching,
				list,
				byId
			}
		} = this.props
		return (
			<ul>
				{
					isFetching ? <li>Loading...</li> :
					list.map(id => {
						const post = byId[id]
						return <li key={post.id}>
							{post.title}
						</li>
					})
				}
			</ul>
		)
	}
}

const mapStateToProps = state => ({
	posts : { ...state.posts }
})

PostsList = connect(
	mapStateToProps,
	{ ...postActions } 
)(PostsList)

export default PostsList