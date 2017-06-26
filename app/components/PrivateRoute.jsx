import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

let PrivateRoute = ({ component: Component, ...rest }) => {
	return (<Route {...rest} render={props => (
		fakeAuth.isAuthenticated ? (
			<Component {...props}/>
		) : (
		<Redirect to={{
			pathname: '/login',
			state: { from: props.path }
		}}/>
	)
  )}/>)
}

/*const mapStateToProps = state => ({
	...state
})*/

PrivateRoute = withRouter(connect()(PrivateRoute))

export default PrivateRoute