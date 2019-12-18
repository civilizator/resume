import React from "react"
import { Link } from "react-router-dom"

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
// https://material-ui.com/
import { useForm } from "react-form" // https://github.com/tannerlinsley/react-form

import { SendToFakeServer as sendToFakeServer } from "./../../dev/FackeServer"
import { checkEmail } from "./ValidateEmail"
import { EmailField } from "./EmailField"

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

                    <EmailField field="email" validate={ value => checkEmail(value) }/>

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
