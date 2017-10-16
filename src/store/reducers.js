import C from '../constants'
import { combineReducers } from 'redux'

export const term = (state={}, action) => {
  console.log('action', action)
  switch(action.type) {
    case C.ADD_TERM:
      return {
        id: action.id,
        term: action.term,
        definition: action.definition
      }
    default:
      return state
  }
}

export const terms = (state=[], action) => {
  switch (action.type) {
    case C.ADD_TERM:
      return [
        ...state,
        term({}, action)
      ]
    case C.DELETE_TERM:
      return state.filter(
        t => t.id !== action.id
      )
    default:
      return state
  }
}

export default combineReducers({terms})
