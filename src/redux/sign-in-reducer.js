const LOGIN_SIGN_IN = "LOGIN-SIGN-IN"
const PASSWORD_SIGN_IN = "PASSWORD-SIGN-IN"
const REMEMBER_ME_SIGN_IN = "REMEMBER-ME-SIGN-IN"
const SIGN_IN = "SIGN-IN"

const initialState = {
    login: "stan",
    password: "testPass",
    remember: false
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN: {
            // console.log( "LOGIN_SIGN_IN: ", action.login )
            return { ...state, userInfo: action.userInfo }
        }
        case LOGIN_SIGN_IN: {
            // console.log( "LOGIN_SIGN_IN: ", action.login )
            return { ...state, login: action.login }
        }
        case PASSWORD_SIGN_IN: {
            // console.log( "PASSWORD_SIGN_IN: ", action.password )
            return { ...state, password: action.password }
        }
        case REMEMBER_ME_SIGN_IN: {
            // console.log( "REMEMBER_ME_SIGN_IN: ", action.remember )
            return { ...state, remember: action.remember }
        }
        default:
            return state
    }
}

export const signInCreator = (userInfo) => {
    return { type: SIGN_IN, userInfo }
}

export const signInLoginCreator = (login) => {
    return { type: LOGIN_SIGN_IN, login }
}

export const signInPasswordCreator = (password) => {
    return { type: PASSWORD_SIGN_IN, password }
}

export const signInRememberMeCreator = (remember) => {
    return { type: REMEMBER_ME_SIGN_IN, remember }
}

export default signInReducer
