import React, { useState } from "react"
import { Link } from "react-router-dom"

import * as Yup from "yup"
import { Formik } from "formik"

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LiveHelp from '@material-ui/icons/LiveHelp'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import TextField from "@material-ui/core/TextField"
// https://material-ui.com/
import { Copyright } from "../Copyright/Copyright"

import { useStyles } from "../theme/themeForm"

const validationResetPassword = Yup.object( {
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' )
} )

const HeaderResetPassword = (props) => {
    const classes = useStyles()
    const { isErrorAvatar } = props

    return (
        <>
            <Avatar className={ !!isErrorAvatar ? classes.avatarError : classes.avatar }><LiveHelp/></Avatar>
            <Typography component="h1" variant="h5">Reset password</Typography>
        </>
    )
}

const ResetPasswordForm = (props) => {
    const classes = useStyles()
    const { setErrorAvatar } = props

    return (
        <Formik
            initialValues={ { email: "" } }
            onSubmit={ async (values) => {
                await new Promise( resolve => setTimeout( resolve, 500 ) )
                console.log( "OnSubmit Reset Password: ", values )
                alert( JSON.stringify( values, null, 2 ) )
            } }
            validationSchema={ validationResetPassword }
        >

            { props => {
                const {
                    values,
                    touched,
                    errors,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit
                } = props

                return (
                    <form
                        className={ classes.form }
                        noValidate onSubmit={ handleSubmit }
                        autoComplete="off"
                    >

                        <TextField
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.email }
                            placeholder="Please enter your email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            error={ !!( touched.email && errors.email ) }
                        />
                        { touched.email && errors.email && ( <div>{ errors.email }</div> ) }
                        { setErrorAvatar( !!errors.email ) }

                        <Button
                            disabled={ !!( ( touched.email && errors.email ) || isSubmitting ) }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }>{ !isSubmitting ? "Reset" : "Done" }
                        </Button>
                    </form>
                )
            } }

        </Formik>
    )
}

const ResetPassword = () => {
    const classes = useStyles()
    const [ isErrorAvatar, setErrorAvatar ] = useState( !1 )

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper }>

                <HeaderResetPassword isErrorAvatar={ isErrorAvatar }/>

                <ResetPasswordForm setErrorAvatar={ setErrorAvatar }/>

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
