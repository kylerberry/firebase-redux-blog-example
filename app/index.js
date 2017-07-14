import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/Root'
import configureStore from './configureStore'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { saveState } from './localStorage'

// for material design
injectTapEventPlugin();

const store = configureStore()
store.subscribe(() => {
	saveState(store.getState())
})

ReactDOM.render(
	<Root store={store} />,
	document.getElementById('root')
)