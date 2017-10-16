import C from './constants'
import { v4 } from 'uuid'

export const addTerm = (term, definition) => (
  {
    type: C.ADD_TERM,
    id: v4(),
    term,
    definition
  }
)

export const deleteTerm = (id) => (
  {
    type: C.DELETE_TERM,
    id
  }
)
