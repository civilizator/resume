import React from "react"
import { Link } from "react-router-dom"
// https://material-ui.com/ // https://github.com/NewOldMax/react-material-ui-form-validator
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'

import { Formik } from "formik" // https://github.com/jaredpalmer/formik https://jaredpalmer.com/formik/docs/tutorial
import * as Yup from "yup" // https://github.com/jquense/yup

import { useStyles } from "../theme/themeForm"

import { Copyright } from "../Copyright/Copyright"

const HeaderSignIn = () => {
    const classes = useStyles()
    return (
        <>
            <Avatar className={ classes.avatar }><LockOutlinedIcon/></Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
        </>
    )
}

const validationSchema = Yup.object( {
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' ),
    password: Yup.string()
        .max( 100, "Too many symbols" )
        .required( 'Required' ),
    // remember: Yup.boolean()
    //     .oneOf( [ false ], "remember me" )
} )

const SignInForm = () => {
    const classes = useStyles()

    return (
        <Formik
            initialValues={ { email: "", password: "", remember: false } }
            onSubmit={ async (values, {setSubmitting} ) => {
                // setSubmitting( true )
                await new Promise( resolve => setTimeout( resolve, 500 ) )
                console.log( "OnSubmit Sign In: ", values )
                alert( JSON.stringify( values, null, 2 ) )
                setSubmitting( false )
            } }
            validationSchema={ validationSchema }
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

                console.log( "errors: ", errors )
                return (
                    <form className={ classes.form } noValidate onSubmit={ handleSubmit }>

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
                            // autoFocus
                            error={ !!( touched.email && errors.email ) }
                        />
                        { touched.email && errors.email && ( <div>{ errors.email }</div> ) }

                        <TextField
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.password }
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            error={ !!( touched.password && errors.password ) }
                        />

                        <FormControlLabel
                            control={
                                <Checkbox
                                    onChange={ handleChange }
                                    name="remember"
                                    color="primary"
                                />
                            }
                            label={ !values.remember ? "Remember Me" : "Remembered" }
                        />

                        <Button
                            disabled={ !!( ( touched.email && errors.email ) || isSubmitting ) }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }>Sign In
                        </Button>

                    </form>
                )
            } }

        </Formik>


    )
}

export const SignIn = (props) => {
    const classes = useStyles()
    const { email, enterEmail, password, enterPassword, remember, rememberMe } = props

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper }>
                <HeaderSignIn/>

                <SignInForm/>

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