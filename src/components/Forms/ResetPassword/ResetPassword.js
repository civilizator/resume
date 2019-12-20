import React from "react"
import { Link } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// https://material-ui.com/

import { Copyright } from "../../MaterialUI/Copyright"
import * as Yup from "yup"
import { Formik } from "formik"
import TextField from "@material-ui/core/TextField"

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

const validationSchema = Yup.object( {
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' )
} )

const HeaderResetPassword = () => {
    const classes = useStyles()
    return (
        <>
            <Avatar className={ classes.avatar }><LockOutlinedIcon/></Avatar>
            <Typography component="h1" variant="h5">Reset password</Typography>
        </>
    )
}
const ResetPasswordForm = () => {
    const classes = useStyles()

    return (
        <Formik
            initialValues={ { email: "" } }
            onSubmit={ async (values, {setSubmitting} ) => {
                // setSubmitting( true )
                await new Promise( resolve => setTimeout( resolve, 500 ) )
                console.log( "OnSubmit Reset Password: " )
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


                        <Button
                            // onClick={handleReset}
                            // disabled={isSubmitting}
                            // disabled={!dirty || isSubmitting}
                            disabled={ !!( ( touched.email && errors.email ) || isSubmitting ) }
                            /*onChange={ formik.handleChange }
                            onBlur={ formik.handleBlur }*/
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }>
                            {!isSubmitting ? "Reset" : "Done"}
                        </Button>
                    </form>
                )
            } }

        </Formik>


    )
}

const ResetPassword = () => {
    const classes = useStyles()

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper }>
                <HeaderResetPassword/>

                <ResetPasswordForm/>

                <Grid container>
                    <Grid item xs>
                        <Link to="/sign_in" variant="body2">Sign in</Link>
                    </Grid>
                    <Grid item>
                        <Link to="/sign_up" variant="body2">Sign Up</Link>
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
