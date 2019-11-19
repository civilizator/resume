import { combineReducers, createStore } from "redux"

import headerReducer from "./header-reducer"
import contactReducer from "./contact-reducer"
import experienceReducer from "./experience-reducer"
import additionallyReducer from "./additionally-reducer"

const reducers = combineReducers( {
        header: headerReducer,
        contact: contactReducer,
        experience: experienceReducer,
        additionally: additionallyReducer
    }
)

const store = createStore( reducers )


window.store = store //store.getState()

export default store
