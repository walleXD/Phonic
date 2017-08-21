import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const isDev = process.env.NODE_ENV !== 'production'

console.log('isDev: ', isDev)
const prodMiddlewares = [thunk]
const devMiddlewares = [
  require('redux-logger').default,
  require('redux-immutable-state-invariant').default()
]

const middlewares = isDev
  ? [ ...prodMiddlewares, ...devMiddlewares ]
  : prodMiddlewares

export const initStore = (initialState = {}) => {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
}
