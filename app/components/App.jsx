import React from 'react'

import Header from './Header'
import Footer from './Footer'
import FlashMessage from './FlashMessage'

import * as routeActions from '../actions/route'

class App extends React.Component {

	// dispatch action on every route change
	componentDidMount() {
		const { history, routeChange, location : thisLocation } = this.props
		this.unlisten = history.listen((location, action) => {
			if (thisLocation.pathname !== location.pathname) {
				routeChange(location)
			}
	    })
	}

	componentWillUnmount() {
		this.unlisten()
	}

	render() {
		const { flash, dismissFlash } = this.props
		return (
			<div>
				<Header />
				<FlashMessage { ...flash } onClickHandler={dismissFlash} />
				{this.props.children}
				<Footer />
			</div>
		)
	}
}

export default App