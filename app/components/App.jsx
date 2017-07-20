import React from 'react'

import Header from './Header'
import Footer from './Footer'

import * as routeActions from '../actions/route'

class App extends React.Component {

	// dispatch action on every route change
	componentDidMount() {
		const { history, routeChange } = this.props
		this.unlisten = history.listen((location, action) => {
			routeChange(location)
	    })
	}

	componentWillUnmount() {
		this.unlisten()
	}

	render() {
		return (
			<div>
				<Header />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default App