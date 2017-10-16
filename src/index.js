import storeFactory from './store'
import { addTerm, deleteTerm } from './actions'
import initialState from './data/initialState'

const store = storeFactory(initialState)
store.dispatch(addTerm('yay', 'the bay area'))
store.dispatch(addTerm('yeeee', 'yes'))
store.dispatch(deleteTerm('f9005b4e-975e-433d-a646-79df172e1dbb'))

window.store = store
window.addTerm = addTerm
window.deleteTerm = deleteTerm
