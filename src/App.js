import React from 'react'
import { Main } from "./components"
import "./App.scss"

const LoaderComponent = () => {
    return (
        <div className="containerLoader">
            <div className="ldsHourglass">
            </div>
        </div>
    )
}

const App = () => {
    return (
        <Main Loader={ <LoaderComponent/> }/>
    )
}

export default App
