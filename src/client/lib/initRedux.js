import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const isDev = process.env.NODE_ENV !== 'production'

const prodMiddlewares = [
  thunk
]
const devMiddlewares = [
  require('redux-logger').default,
  require('redux-immutable-state-invariant').default()
]

const middlewares = isDev
  ? [ ...prodMiddlewares, ...devMiddlewares ]
  : prodMiddlewares

export const initStore = (initialState = {}) => {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools(
      applyMiddleware(...middlewares)
    )
  )
  return store
}
