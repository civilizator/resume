import React from "react"
import { Link } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
// import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// https://material-ui.com/
import { useForm, useField, splitFormProps } from "react-form" // https://github.com/tannerlinsley/react-form

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
        marginTop: theme.spacing( 3 ),
    },
    submit: {
        margin: theme.spacing( 3, 0, 2 ),
    },
} ) )

import { SendToFakeServer as sendToFakeServer } from "./../../dev/FackeServer"

const InputField = React.forwardRef( (props, ref) => {

    const [ field, fieldOptions, rest ] = splitFormProps( props )
    const {
        meta: { error, isTouched, isValidating, message },
        getInputProps
    } = useField( field, fieldOptions )

    return (
        <>
            <TextField { ...getInputProps( { ref, ...rest } ) }
                       variant="outlined"
                       margin="normal"
                       required
                       fullWidth
                       id="email"
                       label="Enter Email Address"
                       name="email"
                       autoComplete="email"
                       autoFocus
                       error={ !!error }
                // helperText={error} /*error message*/
            />
            {
                /* Let's inline some validation and error information for our field */
            }
            {
                isValidating ? ( <em>Validating...</em> ) : isTouched &&
                error ? ( <strong>{ error }</strong> ) : message
                    ? ( <small>{ message }</small> ) : null
            }
        </>
    )
} )


export default function SignUp() {

    const classes = useStyles()

    const defaultValues = React.useMemo( () => ( {
            name: "tanner",
            email: "tanner@gmail.com",
        } ), []
    )
    const {
        Form,
        meta: { isSubmitting, canSubmit }
    } = useForm( {
        defaultValues,
        onSubmit: async (values, instance) => {
            console.log( values )
            await sendToFakeServer( values )
            console.log( "Huzzah!" )
        }, debugForm: !1
    } )

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <div className={ classes.paper }>
                <Avatar className={ classes.avatar }>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">Sign up</Typography>
                <Form className={ classes.form } noValidate>
                    <Grid container spacing={ 2 }>
                        <Grid item xs={ 12 }>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="Login"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirm Password"
                                type="password"
                                id="confirmPassword"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={ 12 }>
                            <FormControlLabel
                                control={ <Checkbox value="allowExtraEmails" color="primary"/> }
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={ classes.submit }
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link to="/sign_in" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </Form>
            </div>
            <Box mt={ 5 }>
                <Copyright/>
            </Box>
        </Container>
    )
}

