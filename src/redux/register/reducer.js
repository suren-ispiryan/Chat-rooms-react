import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from "./actions"

const initialStata = {
    registeredUser: [],
    loading: false,
    message: '',
}
const registerReducer = (state = initialStata, action) => {
    switch (action.type) {
        case REGISTER_USER_REQUEST:
            return {
                ...state,
                loading: false,
                message: '',
                registeredUser: [state.registeredUser],
            }
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                loading: true,
                registeredUser: action.register,
                message: action.message
            }
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        default:
            return state
    }
}
export default registerReducer