import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

let PrivateRoute = ({ component: Component, dispatch, auth, ...rest }) => {
	const { user } = auth
	if (!user.id) {
		return (<Redirect path={{
			pathname: '/sign_in'
		}} />)
	}
	return (<Route { ...rest } component={Component} />)
}

const mapStateToProps = ({ auth }) => ({
	auth
})

PrivateRoute = connect(
	mapStateToProps,
	null,
	null,
	{ pure : false } //workaround for `connect`ing Route to store
)(PrivateRoute)

export default PrivateRoute