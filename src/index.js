import React from 'react'
import ReactDOm from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './style/App.css'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOm.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)