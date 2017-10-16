import C from '../../../constants'
import { terms } from '../../../store/reducers'
import deepFreeze from 'deep-freeze'

describe("Terms Reducer", () => {
  it("ADD_TERM success", () => {
    const state = [
      {
        id: 0,
        term: "Yeee",
        definition: "To express excitement, yeah"
      }
    ]
    const action = {
      type: C.ADD_TERM,
      id: 1,
      term: "Hyphy",
      definition: "Hyperactive and exceedingly enthusiastic"
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(terms(state, action))
      .toEqual([
        {
          id: 0,
          term: "Yeee",
          definition: "To express excitement, yeah"
        },
        {
          id: 1,
          term: "Hyphy",
          definition: "Hyperactive and exceedingly enthusiastic"
        }
      ])
  })

  it("DELETE_TERM success", () => {
    const state = [
      {
        id: 0,
        term: "Yeee",
        definition: "To express excitement, yeah"
      },
      {
        id: 1,
        term: "Hyphy",
        definition: "Hyperactive and exceedingly enthusiastic"
      }
    ]
    const action = {
      type: C.DELETE_TERM,
      id: 0
    }
    deepFreeze(state)
    deepFreeze(action)
    expect(terms(state, action))
      .toEqual([
        {
          id: 1,
          term: "Hyphy",
          definition: "Hyperactive and exceedingly enthusiastic"
        }
      ])
  })
})
