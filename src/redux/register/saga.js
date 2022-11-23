import { put, takeLatest } from 'redux-saga/effects';
import axiosInstance from '../../config/axiosInstance';
import {
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE
} from './actions'

function* register(action) {
    try {
        const response = yield axiosInstance.post('/register', action.payload)
        yield put({
            type: REGISTER_USER_SUCCESS,
            message: 'Successfully registered',
            register: response.data
        });
    } catch (e) {
        yield put({
            type: REGISTER_USER_FAILURE,
            message: 'Something went wrong'
        });
    }
}

export default function* registerSaga() {
    yield takeLatest(REGISTER_USER_REQUEST, register);
}