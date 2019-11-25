
const IS_FETCHING_LOADER = "IS-FETCHING"

const initialState = {
    isFetching: !1
}

const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_FETCHING_LOADER: {
            return {
                ...state,
                isFetching: action.loader
            }
        }
        default:
            return state
    }
}

export const loaderCreator = (loader) => {
    return { type: IS_FETCHING_LOADER, loader }
}

export default mainReducer
