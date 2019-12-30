const SIGN_IN_USER = "SIGN-IN"
const LOGOUT_USER = "LOGOUT-USER"

const initialState = {
    currentUser: {
        login: "stan",
        password: "testPass",
        remember: false
    }
}

const signInReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_IN_USER: {
            return {
                ...state,
                currentUser: {
                    ...action.payload,
                    login: action.payload.login,
                    password: action.payload.password,
                    remember: action.payload.remember
                }
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                currentUser: {
                    login: "",
                    password: "",
                    remember: ""
                }
            }
        }
        default:
            return state
    }
}

export const signInCreator = (payload) => {
    return { type: SIGN_IN_USER, payload }
}

export const logoutCreator = () => {
    return { type: LOGOUT_USER }
}

export default signInReducer
