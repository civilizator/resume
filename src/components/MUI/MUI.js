import { MuiThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { ResetPassword, SignIn, SignUp } from "../MUI/Forms"
import Dashboard from "./Dashboard/Dashboard"

import React from "react"
import { customTheme, useStyles } from "./Forms/theme/themeForm"

export const FormsMUI = () => {
    const classes = useStyles()
    return (
        <Router>
            {/*<StylesProvider injectFirst>*/}
                <MuiThemeProvider theme={ customTheme }>
                    <Route path="/sign_up" component={ () => <SignUp classes={ classes }/> }/>
                    <Route path="/sign_in" component={ SignIn }/>
                    <Route path="/reset_password" component={ ResetPassword }/>
                    <Route path="/dashboard" component={ Dashboard }/>
                </MuiThemeProvider>
            {/*</StylesProvider>*/}
        </Router>
    )
}


