import React from "react"
import { Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'

import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'

import { Copyright } from "../Copyright/Copyright"
import { HeaderSignIn } from "./HeaderSignIn"
import { SignInForm } from "./SignInForm"

export const SignIn = (props) => {
    const { useStyles } = props
    const classes = useStyles()
    // const { email, enterEmail, password, enterPassword, remember, rememberMe } = props

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper }>

                <HeaderSignIn useStyles={ useStyles } />

                <SignInForm useStyles={ useStyles } />

                <Grid container className={ classes.containerLink }>
                    <Grid item xs>
                        <Link to="/reset_password" variant="body2">Forgot password?</Link>
                    </Grid>

                    <Grid item>
                        Don't have account?
                        <Link to="/sign_up" variant="body2"> Sign Up</Link>
                    </Grid>
                </Grid>

            </div>
            <Box mt={ 8 }>
                <Copyright/>
            </Box>
        </Container>
    );
}
