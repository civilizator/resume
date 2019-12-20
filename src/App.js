import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"
import { Main } from "./components"
import "./App.scss"
import { PreloaderContainer } from "./components/PreloaderContainer"
// import * as axios from "axios"

import { SignUp } from "./components/Forms"
import { SignIn } from "./components/Forms"
import { ResetPassword } from "./components/Forms"
import Dashboard from "./components/Dashboard/Dashboard"


const App = () => {
    /*
    axios.get(
        `http://localhost:4000/my-pets`,
        { headers: { "Authorization": "std eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTU3NTkxMTgwM30.MEemBPin_W_SNYSXWbicj-HRvb3k7A1k_eBv1GzCH0I" } }
    ).then( res => {
        console.log( res )
    } )
    */
    return (
        <Router>
            <Route exact path="/" component={ Main }/>
            <Route path="/sign_up" component={ SignUp }/>
            <Route path="/sign_in" component={ SignIn }/>
            <Route path="/reset_password" component={ ResetPassword }/>
            <Route path="/dashboard" component={ Dashboard }/>

            <PreloaderContainer/>
        </Router>
    )
}

export default App
