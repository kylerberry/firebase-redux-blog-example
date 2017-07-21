import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import App from './App'
import * as routeActions from '../actions/route'
import * as flashActions from '../actions/flash'

import { MuiThemeProvider } from 'material-ui'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'

const muiTheme = getMuiTheme(darkBaseTheme);

// Connect withRouter so that App.jsx can listen to route changes
// Also wraps with Material-UI Theme Provider
// https://github.com/ReactTraining/react-router/issues/3554 (roblapp)

const AppContainer = (props) => 
	<MuiThemeProvider muiTheme={muiTheme}>
		<App { ...props }/>
	</MuiThemeProvider>

const mapStateToProps = ({ flash }) => ({
	flash
})

export default withRouter(connect(
	mapStateToProps,
	{ 
		...routeActions,
		...flashActions
	}
)(AppContainer));