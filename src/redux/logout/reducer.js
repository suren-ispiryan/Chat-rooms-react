import {
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE
} from "./actions"

const initialStata = {
    loggedOutUser: [],
    loading: false,
    message: '',
}
const logoutReducer = (state = initialStata, action) => {
    switch (action.type) {
        case LOGOUT_USER_REQUEST:
            return {
                ...state,
                loading: false,
                message: '',
                loggedOutUser: [...state.loggedOutUser],
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                loggedOutUser: action.loggedOut,
                message: action.message
            }
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        default:
            return state
    }
}
export default logoutReducer