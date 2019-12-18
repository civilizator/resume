import { combineReducers, createStore } from "redux"

import main from "./main-redux"
import header from "./header-reducer"
import contact from "./contact-reducer"
import experience from "./experience-reducer"
import additionally from "./additionally-reducer"
import signIn from "./sign-in-reducer"

const reducers = combineReducers( {
        main,
        header,
        contact,
        experience,
        additionally,
        signIn
    }
)

const store = createStore( reducers )


// window.store = store //store.getState()

export default store
