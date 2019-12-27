import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Main } from "./components"
import "./App.scss"
import { PreloaderContainer } from "./components/PreloaderContainer"
// import * as axios from "axios"

import { FormsMUI } from "./components/MUI/MUI"

const App = () => {

    // axios.get(
    //     `http://localhost:4000/my-pets`,
    //     { headers: { "Authorization": "std eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NTkxMTgwM30.MEemBPin_W_SNYSXWbicj-HRvb3k7A1k_eBv1GzCH0I" } }
    // ).then( res => {
    //     console.log( res )
    // } )

    return (
        <Router>
            <Route exact path="/" component={ Main }/>

            <FormsMUI/>

            <PreloaderContainer/>
        </Router>
    )
}

export default App
