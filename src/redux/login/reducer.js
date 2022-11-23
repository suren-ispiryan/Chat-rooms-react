import {
    LOGIN_USER_REQUEST,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE
} from "./actions"

const initialStata = {
    loggedUser: [],
    loading: false,
    message: '',
}
const loginReducer = (state = initialStata, action) => {
    switch (action.type) {
        case LOGIN_USER_REQUEST:
            return {
                ...state,
                loading: false,
                message: '',
                loggedUser: [...state.loggedUser],
            }
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                loggedUser: action.login,
                message: action.message
            }
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        default:
            return state
    }
}
export default loginReducer