import React, { useState } from "react"
import { Link } from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"

import Grid from "@material-ui/core/Grid"
import Box from "@material-ui/core/Box"
import Container from "@material-ui/core/Container"

import { Copyright } from "../Copyright/Copyright"
import { SignInHeader } from "./SignInHeader"
import { SignInForm } from "./SignInForm"

export const SignIn = (props) => {
    const { login, password, remember } = props
    const { useStyles, sendSignIn } = props
    const classes = useStyles()
    const [ isErrorAvatar, setErrorAvatar ] = useState( !1 )
    // const { login, setLogin, password, setPassword, remember, rememberMe } = props


    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper } >

                <SignInHeader
                    isErrorAvatar={ isErrorAvatar }
                    useStyles={ useStyles }
                />

                <SignInForm
                    login={ login }
                    password={ password }
                    remember={ remember }
                    setErrorAvatar={ setErrorAvatar }
                    useStyles={ useStyles }
                    sendSignIn={ sendSignIn }
                />

                <Grid container className={ classes.containerLink }>
                    <Grid item xs>
                        <Link to="/reset_password" variant="body2">Forgot password?</Link>
                        <br/>
                        ___________
                        <br/>
                        <Link to="/dashboard" variant="body2"> Dashboard </Link>
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
