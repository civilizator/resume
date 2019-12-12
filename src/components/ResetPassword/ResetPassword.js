import React from "react"
import { Link } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import { useForm, useField, splitFormProps } from "react-form" // https://github.com/tannerlinsley/react-form
import { SendToFakeServer as sendToFakeServer } from "./../../dev/FackeServer"


const Copyright = () => {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            { 'Copyright © ' }
            <Link color="inherit" to="/">
                resume for Stan
            </Link>{ ' ' }
            { new Date().getFullYear() }
            { '.' }
        </Typography>
    );
}

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
} ) );


const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test( String( email ).toLowerCase() )
}

const checkEmail = async (value) => {

    if (!value) {
        return "Email is required"
    }

    if (!validateEmail( value )) {
        return "Please enter a valid email addresss"
    }

    console.log( `Checking email: ${ value }...` )

    await new Promise( (resolve) => {
        setTimeout( resolve, 2000 )
    } )

    return value === "tanner@gmail.com" ? "Email is already being used" : !1
}

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
                       autoFocus />
            {/* Let's inline some validation and error information for our field */ }
            { isValidating ? (
                <em>Validating...</em>
            ) : isTouched && error ? (
                <strong>{ error }</strong>
            ) : message ? (
                <small>{ message }</small>
            ) : null }
        </>
    )
} )



const ResetPassword = () => {
    const classes = useStyles();

    const defaultValues = React.useMemo(
        () => ( {
            name: "tanner",
            age: "29",
            email: "tanner@gmail.com",
            friends: [ "jaylen" ]
        } ),
        []
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
