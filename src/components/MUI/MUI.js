import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { Route } from "react-router-dom"

import '@material-ui/core/Avatar'
import '@material-ui/core/Button'
// import '@material-ui/core/TextField'
// import '@material-ui/core/CssBaseline'
// import '@material-ui/core/Grid'
// import '@material-ui/core/Box'
// import '@material-ui/core/Container'

import Dashboard from "./Dashboard/Dashboard"
import SignUp from "./Forms/SignUp/SignUp"
import SignInContainer from "./Forms/SignIn/SignInContainer"
import ResetPassword from "./Forms/ResetPassword/ResetPassword"
import { customTheme, useStyles } from "./Forms/theme/themeForm"

export const FormsMUI = () => {
    return (
        // <Router>

            <MuiThemeProvider theme={ customTheme }>
                <Route path="/sign_up" component={ () => <SignUp useStyles={ useStyles }/> }/>
                <Route path="/sign_in" component={ () => <SignInContainer useStyles={ useStyles }/> }/>
                <Route path="/reset_password" component={ () => <ResetPassword useStyles={ useStyles }/> }/>
                <Route path="/dashboard" component={ () => <Dashboard/> }/>
            </MuiThemeProvider>

        // </Router>
    )
}


