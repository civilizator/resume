import React from "react"
import TextField from "@material-ui/core/TextField"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Checkbox from "@material-ui/core/Checkbox"
import Button from "@material-ui/core/Button"
import { Formik } from "formik"
import { validationSignIn } from "./validationSignIn"


export const SignInForm = (props) => {
    // const { login = "stan", password = "testPass", remember = false } = props
    const { login, password, remember } = props
    const { setErrorAvatar, useStyles, sendSignIn } = props
    const classes = useStyles()
    let { isErrorLogin, isErrorPassword, isAllErrors } = false

    return (
        <Formik
            validationSchema={ validationSignIn }
            initialValues={ { login: login, password: password, remember: remember } }
            onSubmit={ async (values, { setSubmitting }) => {
                // await new Promise( resolve => setTimeout( resolve, 2500 ) )
                // alert( JSON.stringify( await sendSignIn( values ), null, 2 ) )
                // const response = await sendSignIn( values )
                // console.log(response)
                await sendSignIn( values )
                setSubmitting( false )
            } }
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

                isErrorLogin = !!( touched.login && errors.login )
                isErrorPassword = !!( touched.password && errors.password )
                isAllErrors = isErrorLogin || isErrorPassword || isSubmitting
                setErrorAvatar( isAllErrors )

                return (
                    <form className={ classes.form } noValidate onSubmit={ handleSubmit }>
                        {
                            ( isErrorLogin || isErrorPassword ) && <div>Incorrect username or password.</div>
                        }

                        <TextField
                            onChange={ handleChange }
                            onBlur={ handleBlur }
                            value={ values.login }
                            placeholder="Username or email address"
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="login"
                            label="Login"
                            name="login"
                            autoComplete="login"
                            // autoFocus
                            error={ isErrorLogin }
                        />
                        { isErrorLogin && ( <div>{ errors.login }</div> ) }

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
                            error={ isErrorPassword }
                        />
                        { isErrorPassword && ( <div>{ errors.password }</div> ) }

                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={ values.remember }
                                    onChange={ handleChange }
                                    name="remember"
                                    // color="primary"
                                />
                            }
                            label={ !values.remember ? "Remember Me" : "Remembered" }
                        />

                        <Button
                            disabled={ isAllErrors }
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
