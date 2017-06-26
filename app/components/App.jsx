import React from 'react'

import Header from './Header'
import Footer from './Footer'

import PostsList from './PostsList'
import CreatePost from './CreatePost'

// This Component will wrap header, {props.children} and footer

const App = ({ children }) => 
	<div>
		<Header />
		<CreatePost />
		{children}
		<PostsList />
		<Footer />
	</div>

export default App