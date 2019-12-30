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
                    ...action.currentUser,
                    login: action.currentUser.login,
                    password: action.currentUser.password,
                    remember: action.currentUser.remember
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

export const signInCreator = (currentUser) => {
    return { type: SIGN_IN_USER, currentUser }
}

export const logoutCreator = () => {
    return { type: LOGOUT_USER }
}

export default signInReducer
