// eslint-disable-next-line
import React from "react"
import { Link } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// https://material-ui.com/
import { useForm, useField, splitFormProps } from "react-form" // https://github.com/tannerlinsley/react-form

import { SendToFakeServer as sendToFakeServer } from "./../../dev/FackeServer"
import { checkEmail } from "./ValidateEmail"

import {Copyright} from "./../MaterialUI/Copyright"

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

const ResetPassword = () => {

    const classes = useStyles()

    const defaultValues = React.useMemo( () => ( {
            email: "tanner@gmail.com"
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
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Reset password</Typography>

                <Form className={ classes.form }>

                    <InputField
                        field="email"
                        validate={ value => checkEmail(value) }
                    />

                    <Button disabled={ !canSubmit }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }>Reset
                    </Button>

                    <Grid container>
                            <em>{ isSubmitting ? "Submitting... " : null }</em>
                        <Grid item xs>
                            <Link to="/sign_in" variant="body2">Sign in</Link>
                        </Grid>
                        <Grid item>
                            <Link to="/sign_up" variant="body2">Sign Up</Link>
                        </Grid>
                    </Grid>
                </Form>
            </div>

            <Box mt={ 8 }>
                <Copyright/>
            </Box>
        </Container>
    )
}

export default ResetPassword
