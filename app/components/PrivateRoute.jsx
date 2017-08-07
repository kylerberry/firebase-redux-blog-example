import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'

let PrivateRoute = ({ component: Component, dispatch, auth, ...rest }) => {
	const { user } = auth
	
	return (<Route render={props => (!user.id
		? <Redirect to="/sign_in" />
		: <Component { ...props } />
	)}/>)
}

const mapStateToProps = ({ auth }) => ({
	auth
})

PrivateRoute = withRouter(connect(
	mapStateToProps,
	null,
	null,
	{ pure : false } //workaround for `connect`ing Route to store
)(PrivateRoute))

export default PrivateRoute