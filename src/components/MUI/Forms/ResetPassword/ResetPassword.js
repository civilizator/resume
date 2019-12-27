import React, { useState } from "react"
import { Link } from "react-router-dom"
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import { Copyright } from "../Copyright/Copyright"
import { ResetPasswordHeader } from "./ResetPasswordHeader"
import { ResetPasswordForm } from "./ResetPasswordForm"


const ResetPassword = (props) => {
    const { useStyles } = props
    const classes = useStyles()
    const [ isErrorAvatar, setErrorAvatar ] = useState( !1 )

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={ classes.paper }>

                <ResetPasswordHeader
                    isErrorAvatar={ isErrorAvatar }
                    useStyles={ useStyles }
                />

                <ResetPasswordForm
                    setErrorAvatar={ setErrorAvatar }
                    useStyles={ useStyles }
                />

                <Grid container className={ classes.containerLink }>
                    <Grid item xs>
                        <Link to="/sign_in" variant="body2">Sign in</Link>
                        {/*<Button color="secondary" to="/sign_in" component={ Link }>Sign in</Button>*/ }
                    </Grid>
                    <Grid item>
                        <Link to="/sign_up" variant="body2">Sign Up</Link>
                        {/*<Button color="secondary" to="/sign_up" component={ Link }>Sign Up</Button>*/ }
                    </Grid>
                </Grid>
            </div>

            <Box mt={ 8 }>
                <Copyright/>
            </Box>
        </Container>
    )
}

export default ResetPassword
