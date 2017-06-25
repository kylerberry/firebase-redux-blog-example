import React from 'react'
import * as actions from '../actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// @todo make a Post Component
// @todo delete button here just for testing

class PostsList extends React.Component {

	componentDidMount() {
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
							<button onClick={() => {
								deletePost(id)
							}}>Delete</button>
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
	actions
)(PostsList)

export default PostsList