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
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
//https://jaredpalmer.com/formik/docs/tutorial
import { useFormik } from "formik" // https://github.com/jaredpalmer/formik
import * as Yup from "yup" // https://github.com/jquense/yup

import { Copyright } from "./../MaterialUI/Copyright"

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
        marginTop: theme.spacing( 1 ),
    },
    submit: {
        margin: theme.spacing( 3, 0, 2 ),
    },
} ) )

const HeaderSignIn = () => {
    const classes = useStyles()
    return (
        <div className={ classes.paper }>
            <Avatar className={ classes.avatar }><LockOutlinedIcon/></Avatar>
            <Typography component="h1" variant="h5">Sign in</Typography>
        </div>
    )
}

const validate = values => {
    const errors = {}

    if (!values.email) {
        errors.email = "Required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,5}$/i.test( values.email )) {
        errors.email = "Invalid email address"
    }

    if (!values.password) {
        errors.password = "Required"
    } else if (values.password.length < 5) {
        errors.password = "Must be at least 5 characters"
    } else if (values.password.length > 20) {
        errors.password = "Must be no more than 20 characters"
    }

    console.log( errors )
    return errors
}

const validationSchema = Yup.object( {
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' ),
    password: Yup.string()
        .min(5, "Must be at least 5 characters" )
        .max( 20, "Must be no more than 20 characters" )
        .required( 'Required' ),
    remember: Yup.boolean()
        .oneOf([true], "remember me")
} )

export const SignIn = (props) => {
    const classes = useStyles()
    const { email, enterEmail, password, enterPassword, remember, rememberMe } = props
    const formik = useFormik( {
        initialValues: { email, password },
        onSubmit: values => alert( JSON.stringify( values, null, 2 ) ),
        validationSchema
    } )
    console.log( formik.values)
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper }>
                <HeaderSignIn/>

                <form className={ classes.form } noValidate onSubmit={ formik.handleSubmit }>

                    <TextField
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.email }
                        placeholder="Please enter your email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        error={!!(formik.touched.email && formik.errors.email)}/>
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
                    <TextField
                        onChange={ formik.handleChange }
                        onBlur={ formik.handleBlur }
                        value={ formik.values.password }
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        error={!!(formik.touched.password && formik.errors.password)}/>

                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={ formik.handleChange }
                                name="remember"
                                color="primary"/>
                        }
                        label="Remember me"/>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={ classes.submit }>Sign In
                    </Button>

                </form>

                <Grid container>
                    <Grid item xs>
                        <Link to="/reset_password" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>

                    <Grid item>
                        <Link to="/sign_up" variant="body2">
                            { "Don't have an account? Sign Up" }
                        </Link>
                    </Grid>
                </Grid>

            </div>
            <Box mt={ 8 }>
                <Copyright/>
            </Box>
        </Container>
    );
}
