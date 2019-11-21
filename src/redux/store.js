import { combineReducers, createStore } from "redux"

import header from "./header-reducer"
import contact from "./contact-reducer"
import experience from "./experience-reducer"
import additionally from "./additionally-reducer"

const reducers = combineReducers( {
        header,
        contact,
        experience,
        additionally
    }
)

const store = createStore( reducers )


// window.store = store //store.getState()

export default store
