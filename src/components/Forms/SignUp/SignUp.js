import React from "react"
import { Link } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import InsertEmoticon from '@material-ui/icons/InsertEmoticon'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// https://material-ui.com/

import { Copyright } from "../../MaterialUI/Copyright"
import * as Yup from "yup"
import { Formik } from "formik"


const useStyles = makeStyles( theme => ( {
    paper: {
        marginTop: theme.spacing( 8 ),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing( 1 ),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing( 3 ),
    },
    submit: {
        margin: theme.spacing( 3, 0, 2 ),
    },
} ) )

const HeaderSignUp = () => {
    const classes = useStyles()
    return (
        <>
            <Avatar className={ classes.avatar }><InsertEmoticon/></Avatar>
            <Typography component="h1" variant="h5">Sign up</Typography>
        </>
    )
}

const validationSchema = Yup.object( {
    username: Yup.string()
        // .trim()
        // .strict()
        .matches(/^[a-zA-Z0-9]+([_-]?[a-zA-Z0-9])*$/,
            `Should be only alphanumeric characters or single hyphens, and can't begin or end with a hyphen` )
        .min( 4, "Must be at least 4 characters" )
        .max( 40, "Must be no more than 40 characters" )
        .required( 'Required' ),
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' ),
    password: Yup.string()
        .matches(/^[A-Za-z\d~#$^+-=!*()@%&]*$/,
            `Can be only letters, numbers and special character`)
        .min( 8, "Must be at least 8 characters" )
        .max( 100, "Must be no more than 100 characters" )
        .required( 'Required' )
} )

const SignUpForm = () => {
    const classes = useStyles()

    return (
        <Formik
            initialValues={ { username: "", email: "", password: "" } }
            onSubmit={ async (values, {setSubmitting} ) => {
                // setSubmitting( true )
                await new Promise( resolve => setTimeout( resolve, 500 ) )
                console.log( "OnSubmit Sign Up: ", values )
                alert( JSON.stringify( values, null, 2 ) )
                // setSubmitting( false )
            } }
            validationSchema={ validationSchema }
        >

            { props => {
                const {
                    values,
                    touched,
                    errors,
                    dirty,
                    isSubmitting,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    handleReset,
                    submitForm
                } = props

                console.log( "3: ", isSubmitting )
                return (
                    <form className={ classes.form } noValidate onSubmit={ handleSubmit }>
                        <Grid container spacing={ 2 }>

                            <Grid item xs={ 12 }>
                                <TextField
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.username }
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="userName"
                                    label="Username"
                                    name="username"
                                    autoComplete="lname"
                                    // autoFocus
                                    error={ !!( touched.username && errors.username ) }/>
                                { touched.username && errors.username && ( <div>{ errors.username }</div> ) }
                            </Grid>

                            <Grid item xs={ 12 }>
                                <TextField
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.email }
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    error={ !!( touched.email && errors.email ) }/>
                                { touched.email && errors.email && ( <div>{ errors.email }</div> ) }
                            </Grid>

                            <Grid item xs={ 12 }>
                                <TextField
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    value={ values.password }
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    error={ !!( touched.password && errors.password ) }/>
                                { touched.password && errors.password  &&  (
                                    <div>{ errors.password }</div>) }
                            </Grid>

                        </Grid>

                        <Button
                            // disabled={ isSubmitting }
                            disabled={
                                !!( ( touched.username && errors.username )
                                    || ( touched.email && errors.email )
                                    || ( touched.password && errors.password )
                                    || isSubmitting ) }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }>
                            { !isSubmitting ? "Sign Up" : "Done" }
                        </Button>

                    </form>
                )
            } }

        </Formik>


    )
}

export default function SignUp() {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>

            <div className={ classes.paper }>
                <HeaderSignUp/>

                <SignUpForm/>

                <Grid container justify="flex-end">
                    <Grid item>
                        <Link to="/sign_in" variant="body2">
                            Already have an account? Sign in
                        </Link>
                    </Grid>
                </Grid>

            </div>

            <Box mt={ 5 }>
                <Copyright/>
            </Box>

        </Container>
    )
}

