import React from "react"
import { connect } from "react-redux"
import { SignIn } from "./SignIn"
import { signInEmailCreator, signInPasswordCreator, signInRememberMeCreator } from "../../../redux/sign-in-reducer"

const SignInContainer = (props) => {
    const { email, enterEmail, password, enterPassword, remember, rememberMe } = props

    return (
        <SignIn
            email={ email }
            enterEmail={ enterEmail }
            password={ password }
            enterPassword={ enterPassword }
            remember={ remember }
            rememberMe={ rememberMe }
        />
    )
}

const mapStateProps = (state) => {
    return {
        email: state.signIn.email,
        password: state.signIn.password,
        remember: state.signIn.remember
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enterEmail: (email) => {
            dispatch( signInEmailCreator( email ) )
        },
        enterPassword: (password) => {
            dispatch( signInPasswordCreator( password ) )
        },
        rememberMe: (remember) => {
            dispatch( signInRememberMeCreator( remember ) )
        }
    }
}

export default connect( mapStateProps, mapDispatchToProps )( SignInContainer )
