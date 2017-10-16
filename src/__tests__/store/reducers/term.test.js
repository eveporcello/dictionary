import C from '../../../constants'
import { term } from '../../../store/reducers'
import deepFreeze from 'deep-freeze'

describe("Term Reducer", () => {
  it("ADD_TERM success", () => {
    const state = {}
    const action = {
      type: C.ADD_TERM,
      id: 0,
      term: "Yeee",
      definition: "To express excitement, yeah"
    }
    deepFreeze(state)
    deepFreeze(action)
    const result = term(state, action)
    expect(result)
      .toEqual({
        id: 0,
        term: "Yeee",
        definition: "To express excitement, yeah"
      })
  })
})
