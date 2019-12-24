import React from "react"
import Grid from "@material-ui/core/Grid"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Formik } from "formik"
import { validationSignUp } from "./validationSignUp"

export const SignUpForm = (props) => {
    const { useStyles } = props
    const classes = useStyles()

    return (
        <Formik
            initialValues={ { username: "", email: "", password: "" } }
            onSubmit={ async (values/*, {setSubmitting}*/) => {
                await new Promise( resolve => setTimeout( resolve, 500 ) )
                console.log( "OnSubmit Sign Up: ", values )
                alert( JSON.stringify( values, null, 2 ) )
                // setSubmitting( false )
            } }
            validationSchema={ validationSignUp }
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
                                { touched.password && errors.password && (
                                    <div>{ errors.password }</div> ) }
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
