import C from '../../constants'
import storeFactory from '../../store'

describe("Store Factory", () => {

    beforeAll(() => {
        window.localStorage = {}
        console.groupCollapsed = jest.fn()
        console.log = jest.fn()
        console.groupEnd = jest.fn()
    })

    afterEach(() => jest.resetAllMocks())

    describe("Saving", () => {

        let store

        beforeEach(() => {
            global.localStorage['redux-store'] = false
            store = storeFactory({})
            store.dispatch({
                type: C.ADD_TERM,
                id: 0,
                term: 'Groovy',
                description: "Throwback bay area slang"

            })
        })

        it("saves state to localStorage", () =>
            expect(JSON.parse(global.localStorage['redux-store']).terms.length).toEqual(1))

    })


})
