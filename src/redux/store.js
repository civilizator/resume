import { combineReducers, createStore } from "redux"

import headerReducer from "./header-reducer"
import contactReducer from "./contact-reducer"

const reducers = combineReducers( {
        header: headerReducer,
        contact: contactReducer
    }
)

const store = createStore( reducers )

window.store = store //store.getState()

export default store
