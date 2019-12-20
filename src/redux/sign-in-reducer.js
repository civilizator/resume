const EMAIL_SIGN_IN = "EMAIL-SIGN-IN"
const PASSWORD_SIGN_IN = "PASSWORD-SIGN-IN"
const REMEMBER_ME_SIGN_IN = "REMEMBER-ME-SIGN-IN"

const initialState = {
    email: "stan@argaatas.com",
    password: "secret",
    remember: false
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_SIGN_IN: {
            console.log( "EMAIL_SIGN_IN: ", action.email )
            return { ...state, email: action.email }
        }
        case PASSWORD_SIGN_IN: {
            console.log( "PASSWORD_SIGN_IN: ", action.password )
            return { ...state, password: action.password }
        }
        case REMEMBER_ME_SIGN_IN: {
            console.log( "REMEMBER_ME_SIGN_IN: ", action.remember )
            return { ...state, remember: action.remember }
        }
        default:
            return state
    }
}

export const signInEmailCreator = (email) => {
    return { type: EMAIL_SIGN_IN, email }
}

export const signInPasswordCreator = (password) => {
    return { type: PASSWORD_SIGN_IN, password }
}

export const signInRememberMeCreator = (remember) => {
    return { type: REMEMBER_ME_SIGN_IN, remember }
}

export default signInReducer
