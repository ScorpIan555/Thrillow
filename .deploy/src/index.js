import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import store from './stores'
import { Provider } from 'react-redux'
import Home from './components/Home'

/* * * * * * * * * * * * * * * * * * * * * * * * * * *
	This is the entry point of the React app with Redux implemented
* * * * * * * * * * * * * * * * * * * * * * * * * * * *
*/

const app = (
	<Provider store={store.configure(null)}>
		<Home />
	</Provider>
)


ReactDOM.render(app, document.getElementById('root'))
