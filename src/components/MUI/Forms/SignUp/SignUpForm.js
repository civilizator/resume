import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { Formik } from "formik"
import { validationSignUp } from "./validationSignUp"

export const SignUpForm = (props) => {
    const { setErrorAvatar, useStyles } = props
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

                        <TextField
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.username }
                            placeholder="Please enter username"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label="Username"
                            name="username"
                            autoComplete="lname"
                            // autoFocus
                            error={ !!( touched.username && errors.username ) }/>
                        { touched.username && errors.username && ( <div>{ errors.username }</div> ) }
                        { setErrorAvatar( !!errors.username ) }

                        <TextField
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.email }
                            placeholder="Please enter email"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            error={ !!( touched.email && errors.email ) }/>
                        { touched.email && errors.email && ( <div>{ errors.email }</div> ) }
                        { setErrorAvatar( !!errors.email ) }

                        <TextField
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.password }
                            placeholder="Please enter password"
                            variant="outlined"
                            margin="normal"
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
                        { setErrorAvatar( !!errors.password ) }


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
