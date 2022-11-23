import { all } from 'redux-saga/effects';
import register from './register/saga';
import login from './login/saga';
import logout from './logout/saga';

function* rootSaga() {
    yield all([
        register(),
        login(),
        logout()
    ])
}
export default rootSaga