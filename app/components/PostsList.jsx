import React from 'react'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _map from 'lodash/map'

// @todo make a Post Component
class PostsList extends React.Component {

	componentDidMount() {
		const { fetchPostsRealtime } = this.props
		fetchPostsRealtime()
	}

	render () {
		const { posts } = this.props
		return (
			<div>
				{posts.isFetching ?
					<p>Loading...</p> :
					<ul>
						{_map(posts.byId, post => 
							<li key={post.id}>{post.title}</li>
						)}
					</ul>
				}
			</div>
			
		)
	}
}

// Move this to the Posts Component
// ...just testing hooking up the store
// ...make ContainerComponents
const mapStateToProps = state => ({
	posts : { ...state.posts }
})

PostsList = connect(
	mapStateToProps,
	actions
)(PostsList)

export default PostsList