import React from "react"
import { Link } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LiveHelp from '@material-ui/icons/LiveHelp'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// https://material-ui.com/

import { Copyright } from "../../MaterialUI/Copyright"
import * as Yup from "yup"
import { Formik } from "formik"
import TextField from "@material-ui/core/TextField"


const customColor = createMuiTheme( {
    palette: {
        primary: {
            light: '#ff669a',
            main: '#ff4081',
            dark: '#b22c5a',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ed4b82',
            main: '#e91e63',
            dark: '#a31545',
            contrastText: '#000',
        },
    },
} )

const useStyles = makeStyles( theme => ( {

        paper: {
            marginTop: theme.spacing( 8 ),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

        },

        avatar: {
            margin: theme.spacing( 1 ),
            // backgroundColor: theme.palette.secondary.main,
            backgroundColor: customColor.palette.primary.main,
        },

        form: {
            width: '100%', // Fix IE 11 issue.
            marginTop: theme.spacing( 1 ),
        },

        submit: {
            margin: theme.spacing( 3, 0, 2 ),
            // backgroundColor: customColor.palette.primary.main,
            // '&:hover': {
            //     backgroundColor: customColor.palette.primary.dark,
            // },
        },

    } )
)

const validationResetPassword = Yup.object( {
    email: Yup.string()
        .email( 'Invalid email address' )
        .required( 'Required' )
} )

const HeaderResetPassword = () => {
    const classes = useStyles()

    return (
        <>
            <Avatar className={ classes.avatar }><LiveHelp/></Avatar>
            <Typography component="h1" variant="h5">Reset password</Typography>
        </>
    )
}

const ResetPasswordForm = () => {
    const classes = useStyles()

    return (
        <Formik
            initialValues={ { email: "" } }
            onSubmit={ async (values, { setSubmitting }) => {
                await new Promise( resolve => setTimeout( resolve, 500 ) )
                console.log( "OnSubmit Reset Password: ", values )
                alert( JSON.stringify( values, null, 2 ) )
                // setSubmitting( false )
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
                    handleSubmit,
                    // dirty,
                    // handleReset,
                    // submitForm
                } = props

                console.log( "3: ", isSubmitting )
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
                            { !isSubmitting ? "Reset" : "Done" }
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
        <ThemeProvider theme={ customColor }>
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
        </ThemeProvider>
    )
}

export default ResetPassword
