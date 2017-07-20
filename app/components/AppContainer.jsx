import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import App from './App'
import * as routeActions from '../actions/route'

// Connect withRouter so that App.jsx can listen to route changes
// https://github.com/ReactTraining/react-router/issues/3554 (roblapp)

export default withRouter(connect(
	null,
	{ ...routeActions }
)(App));