import React from "react"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Button from "@material-ui/core/Button"
import { Formik } from "formik"
import { validationSignIn } from "./validationSignIn"

export const SignInForm = (props) => {
    const { useStyles } = props
    const classes = useStyles()

    return (
        <Formik
            initialValues={ { email: "", password: "", remember: false } }
            onSubmit={ async (values/*, {setSubmitting}*/) => {
                // setSubmitting( true )
                await new Promise( resolve => setTimeout( resolve, 500 ) )
                console.log( "OnSubmit Sign In: ", values )
                alert( JSON.stringify( values, null, 2 ) )
                // setSubmitting( false )
            } }
            validationSchema={ validationSignIn }
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
