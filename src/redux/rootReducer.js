import { combineReducers } from 'redux';
import registerReducer from './register/reducer';
import loginReducer from './login/reducer';
import logoutReducer from './logout/reducer';

const rootReducer = combineReducers({
    registeredUser: registerReducer,
    loggedUser: loginReducer,
    loggedOutUser: logoutReducer
})

export default rootReducer