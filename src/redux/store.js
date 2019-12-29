import { combineReducers, createStore, compose } from "redux"

import main from "./main-redux"
import header from "./header-reducer"
import contact from "./contact-reducer"
import experience from "./experience-reducer"
import additionally from "./additionally-reducer"
import signIn from "./sign-in-reducer"

const reducer = combineReducers( {
        main,
        header,
        contact,
        experience,
        additionally,
        signIn
    }
)

const enhancers = compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
    reducer,
    enhancers
)


//window.store = store //store.getState()

export default store
