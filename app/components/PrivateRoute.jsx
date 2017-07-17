import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

let PrivateRoute = ({ component: Component, ...rest }) => {
	const { auth : { user }} = rest
	return (<Route {...rest} render={props => (
		user.id ? (
			<Component {...props}/>
		) : (
		<Redirect to={{
			pathname: rest.redirect ? rest.redirect : '/login',
			state: { from: props.path }
		}}/>
	)
  )}/>)
}

const mapStateToProps = ({ auth }) => ({
	auth
})

PrivateRoute = withRouter(connect(
	mapStateToProps
)(PrivateRoute))

export default PrivateRoute