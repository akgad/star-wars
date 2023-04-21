import { createStore,applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"

import {setLocalItems} from '@utils/localStorage'

import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))

store.subscribe(() => {
    setLocalItems('store', store.getState().favoritesReducer)
})

export default store