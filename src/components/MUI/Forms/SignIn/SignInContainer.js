import React from "react"
import { connect } from "react-redux"
import { SignIn } from "./SignIn"
import { signInCreator, logoutCreator } from "../../../../redusers/sign-in-reducer"
import * as axios from "axios"


const SignInContainer = (props) => {
    const { login, password, remember } = props

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
            // setTimeout( () => resolve( values ), 1500 )
            resolve( values )
        } ).then( (value) => {

            auth( value )
            // console.log( value  )
            // console.log( auth( value )  )
            return value
        } )

        // let s = JSON.stringify( await promise, null, 2 )
        // alert( s )
        // console.log( promise.login  )
        // console.log( promise  )
        // console.log( values.login  )

        await props.userSignIn(promise)


        // await setLogin( promise.login )
        // await setPassword( promise.password )
        // await setRemember( promise.remember )

        return promise
    }

    return (
        <SignIn
            login={ login }
            password={ password }
            remember={ remember }
            useStyles={ props.useStyles }
            sendSignIn={ sendSignIn }
            userLogout={ props.userLogout }
        />
    )
}

const mapStateProps = (state) => {
    return {
        // login: state.signIn.login,
        // password: state.signIn.password,
        // remember: state.signIn.remember
        login: state.signIn.currentUser.login,
        password: state.signIn.currentUser.password,
        remember: state.signIn.currentUser.remember
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        userSignIn: (currentUser) => {
            dispatch( signInCreator( currentUser ) )
        },
        userLogout: () => {
            dispatch( logoutCreator() )
        }
    }
}

export default connect( mapStateProps, mapDispatchToProps )( SignInContainer )
