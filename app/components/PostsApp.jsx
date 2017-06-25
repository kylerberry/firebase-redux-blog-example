import React from 'react'
import PostsList from './PostsList'
import CreatePost from './CreatePost'

/* @todo auth for CreatePost */

const PostsApp = () => 
	<div>
		<CreatePost />
		<PostsList />
	</div>

export default PostsApp