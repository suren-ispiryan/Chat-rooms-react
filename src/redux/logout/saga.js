import { put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../../config/axiosInstance';
import {
    LOGOUT_USER_REQUEST,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE
} from './actions'

function* logout() {
    try {
        const response = yield axiosInstance.get('/logout')
        console.log(response.data)
        yield put({
            type: LOGOUT_USER_SUCCESS,
            message: 'Successfully logged out',
            loggedOut: response.data
        });
    } catch (e) {
        yield put({
            type: LOGOUT_USER_FAILURE,
            message: 'Something went wrong'
        });
    }
}

export default function* logoutSaga() {
    yield takeLatest(LOGOUT_USER_REQUEST, logout);
}