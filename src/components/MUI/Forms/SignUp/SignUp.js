import React from "react"
import { Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Copyright } from "../Copyright/Copyright"
import { HeaderSignUp } from "./HeaderSignUp"
import { SignUpForm } from "./SignUpForm"

export default function SignUp(props) {
    const { useStyles } = props
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={ classes.paper }>

                <HeaderSignUp useStyles={ useStyles } />

                <SignUpForm useStyles={ useStyles } />

                <Grid container justify="flex-end" className={ classes.containerLink }>
                    <Grid item>
                        Already have an account?
                        <Link to="/sign_in" variant="body2"> Sign in</Link>
                    </Grid>
                </Grid>

            </div>

            <Box mt={ 5 }>
                <Copyright/>
            </Box>

        </Container>
    )
}

