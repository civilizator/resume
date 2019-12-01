import React from 'react'
import { Main } from "./components"
import "./App.scss"
import { PreloaderContainer } from "./components/PreloaderContainer"
import * as axios from "axios"

const App = () => {
    axios.get(
        `http://localhost:4000`
    ).then( response => {
        console.log( response)
    } )

    return (
        <>
            <Main/>
            <PreloaderContainer/>
        </>
    )
}

export default App
