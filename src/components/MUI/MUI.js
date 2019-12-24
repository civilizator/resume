import React from "react"
import { MuiThemeProvider } from "@material-ui/core/styles"
import { BrowserRouter as Router, Route } from "react-router-dom"
// import Dashboard from "./Dashboard/Dashboard"
import '@material-ui/core/Avatar'
import '@material-ui/core/Button'
import { customTheme, useStyles } from "./Forms/theme/themeForm"
import SignUp from "./Forms/SignUp/SignUp"
import SignInContainer from "./Forms/SignIn/SignInContainer"
import ResetPassword from "./Forms/ResetPassword/ResetPassword"

export const FormsMUI = () => {
    return (
        <Router>
            {/*<StylesProvider injectFirst>*/}
                <MuiThemeProvider theme={ customTheme }>
                    <Route path="/sign_up" component={ () => <SignUp useStyles={ useStyles }/> }/>
                    <Route path="/sign_in" component={ () => <SignInContainer useStyles={ useStyles }/> }/>
                    <Route path="/reset_password" component={ () => <ResetPassword useStyles={ useStyles }/> }/>
                    {/*<Route path="/dashboard" component={ Dashboard }/>*/}
                </MuiThemeProvider>
            {/*</StylesProvider>*/}
        </Router>
    )
}


