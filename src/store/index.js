import { createStore, applyMiddleware } from 'redux'
import reducer from './reducers'

let console = window.console

const logger = store => next => action => {
  let result
  console.groupCollapsed("dispatching", action.type)
  console.log('previous state', store.getState())
  console.log('action', action)
  result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

const saver = store => next => action => {
  let result = next(action)
  localStorage['redux-store'] = JSON.stringify(store.getState())
  return result
}

const storeFactory = (initialState) =>
  applyMiddleware(logger, saver)(createStore)(reducer, initialState)

export default storeFactory
