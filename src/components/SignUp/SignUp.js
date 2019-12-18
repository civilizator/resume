import React from "react"
import { Link } from "react-router-dom"
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// https://material-ui.com/

import { Copyright } from "./../MaterialUI/Copyright"
import { useForm } from "react-form" // https://github.com/tannerlinsley/react-form
import { SendToFakeServer as sendToFakeServer } from "../../dev/FackeServer"
import { checkEmailSIgnUp } from "./ValidateEmailSignUp"
import { EmailFieldSignUp } from "./EmailFieldSignUp"
import { UsernameFieldSignUp } from "./UsernameFieldSignUp"

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



export default function SignUp() {
    const classes = useStyles()

    const defaultValues = React.useMemo( () => ( {
            email: "tanner@gmail.com"
        } ), []
    )
    const {
        Form,
        meta: { isSubmitting, canSubmit }
    } = useForm( {
        // defaultValues,
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

                <Avatar className={ classes.avatar }><LockOutlinedIcon/></Avatar>
                <Typography component="h1" variant="h5">Sign up</Typography>

                <Form className={ classes.form } noValidate>

                    <Grid container spacing={ 2 }>

                        <Grid item xs={ 12 }>
                            <UsernameFieldSignUp />
                        </Grid>

                        <Grid item xs={ 12 }>
                            <EmailFieldSignUp field="email" validate={ value => checkEmailSIgnUp(value) }/>
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

                    <Button disabled={ !canSubmit }
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={ classes.submit }>Sign Up
                    </Button>

                    <em>{ isSubmitting ? "Submitting... " : null }</em>

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

