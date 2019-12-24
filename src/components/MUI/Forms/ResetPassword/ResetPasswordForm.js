import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
// import { useStyles } from "../theme/themeForm"
import { Formik } from "formik"
import { validationResetPassword } from "./validationResetPassword"

export const ResetPasswordForm = (props) => {
    const { setErrorAvatar, useStyles } = props
    const classes = useStyles()

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
