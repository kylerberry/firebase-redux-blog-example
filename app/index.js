import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { saveState } from './localStorage'

import 'normalize.css'
import 'flexboxgrid'

// @todo convert to sass
import '../app/styles/_vendor-overrides.css'
import '../app/styles/_main.css'

// for material design
injectTapEventPlugin();

let store = configureStore()

store.subscribe(() => {
	saveState(store.getState())
})

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
)