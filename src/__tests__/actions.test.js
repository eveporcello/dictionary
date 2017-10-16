import C from '../constants'
import storeFactory from '../store'
import { addTerm, deleteTerm } from '../actions'

describe("Action Creators", () => {

  let store

  describe("addTerm", () => {
    const terms = [
      {
        "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
        "term": "Hyphy",
        "definition": "Hyperactive, rowdy, or energetic"
      },
      {
        "id": "f9005b4e-975e-433d-a646-79df172e1dbc",
        "term": "Hella",
        "definition": "A large amount"
      },
      {
        "id": "f9005b4e-975e-433d-a646-79df172e1dbd",
        "term": "Sideshow",
        "definition": "A gathering of cars performing tricks on roads, highways, and bridges"
      }
    ]

    beforeAll(() => {
      window.localStorage = {}
      store = storeFactory({terms})
      store.dispatch(addTerm("Mark Twainin", "Complaining about SF temps in summer"))
    })

    afterAll(() => global.localStorage['redux-store'] = false)

    it("should add a new term", () =>
      expect(store.getState().terms.length).toBe(4))
  })

  describe("deleteTerm", () => {
    const terms = [
      {
        "id": "f9005b4e-975e-433d-a646-79df172e1dbb",
        "term": "Hyphy",
        "definition": "Hyperactive, rowdy, or energetic"
      },
      {
        "id": "f9005b4e-975e-433d-a646-79df172e1dbc",
        "term": "Hella",
        "definition": "A large amount"
      },
      {
        "id": "f9005b4e-975e-433d-a646-79df172e1dbd",
        "term": "Sideshow",
        "definition": "A gathering of cars performing tricks on roads, highways, and bridges"
      }
    ]

    beforeAll(() => {
      store = storeFactory({terms})
      store.dispatch(deleteTerm('f9005b4e-975e-433d-a646-79df172e1dbd'))
    })

    it("should delete the term", () =>
      expect(store.getState().terms.length).toEqual(2))

  })

})
