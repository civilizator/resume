import React from "react"
import { connect } from "react-redux"
import { SignIn } from "./SignIn"
import {
    signInLoginCreator,
    signInPasswordCreator,
    signInRememberMeCreator
} from "../../../../redux/sign-in-reducer"
import * as axios from "axios"


const SignInContainer = (props) => {
    const { login, setLogin, password, setPassword, remember, setRemember } = props

    const auth = async (data) => {
        const { login, password } = data

        axios.post(
            "http://localhost:4000/auth", {
                'username': login,
                'password': password
            } )
            .then( response => {
                console.log( response )
            } )
            // .catch( error => {
            //     console.log( error )
            // } )
    }

    const sendSignIn = async (values) => {

        let promise = await new Promise( (resolve, reject) => {
            // setTimeout( () => resolve( values ), 500 )
            resolve( values )
        } ).then( (value) => {

            auth( value )
            // console.log( auth( value )  )
            return value
        } )

        // let s = JSON.stringify( await promise, null, 2 )
        // alert( s )
        // console.log( promise.login  )
        // console.log( promise  )
        // console.log( values.login  )
        await setLogin( promise.login )
        await setPassword( promise.password )
        await setRemember( promise.remember )

        return promise
    }

    return (
        <SignIn
            login={ login }
            password={ password }
            remember={ remember }
            useStyles={ props.useStyles }
            sendSignIn={ sendSignIn }
        />
    )
}

const mapStateProps = (state) => {
    return {
        login: state.signIn.login,
        password: state.signIn.password,
        remember: state.signIn.remember
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setLogin: (login) => {
            dispatch( signInLoginCreator( login ) )
        },
        setPassword: (password) => {
            dispatch( signInPasswordCreator( password ) )
        },
        setRemember: (remember) => {
            dispatch( signInRememberMeCreator( remember ) )
        }
    }
}

export default connect( mapStateProps, mapDispatchToProps )( SignInContainer )
