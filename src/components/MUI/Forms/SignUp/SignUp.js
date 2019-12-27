import React, { useState } from "react"
import { Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Copyright } from "../Copyright/Copyright"
import { SignUpHeader } from "./SignUpHeader"
import { SignUpForm } from "./SignUpForm"

export default function SignUp(props) {
    const { useStyles } = props
    const classes = useStyles()
    const [ isErrorAvatar, setErrorAvatar ] = useState( !1 )

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={ classes.paper }>

                <SignUpHeader
                    isErrorAvatar={ isErrorAvatar }
                    useStyles={ useStyles }
                />

                <SignUpForm
                    setErrorAvatar={ setErrorAvatar }
                    useStyles={ useStyles }
                />

                <Grid container justify="flex-end" className={ classes.containerLink }>
                    <Grid item>
                        Already have an account?
                        <Link to="/sign_in" variant="body2"> Sign in</Link>
                    </Grid>
                </Grid>

            </div>

            <Box mt={ 8 }>
                <Copyright/>
            </Box>

        </Container>
    )
}

