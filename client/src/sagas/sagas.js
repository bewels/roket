import { put, call, takeEvery } from 'redux-saga/effects';
import {
	error,
	loading,
	roleSucces,
	succes,
	userSucces,
	user,
	usersSucces,
} from '../redux/actions/actions';
import { roketApi } from './api';

function* roleWorker() {
	try {
		yield put(loading());
		const data = yield call(() => roketApi.getRole());
		yield put(roleSucces(data));
		yield put(succes());
	} catch (e) {
		yield put(error(e));
	}
}
function* userWorker() {
	try {
		yield put(loading());
		const data = yield call(() => roketApi.getUser());
		yield put(user(data));
		yield put(succes());
	} catch (e) {
		yield put(error(e));
	}
}
function* usersWorker() {
	try {
		yield put(loading());
		const data = yield call(() => roketApi.getUsers());
		yield put(usersSucces(data));
		yield put(succes());
	} catch (e) {
		yield put(error(e));
	}
}
function* loginWorker({ payload }) {
	try {
		yield put(loading());
		const data = yield call(() => roketApi.login(payload));
		localStorage.setItem('token', data.token);
		yield put(userSucces());
		yield put(succes(data.message));
	} catch (e) {
		yield put(error(e));
	}
}
function* registerWorker({ payload }) {
	try {
		yield put(loading());
		const data = yield call(() => roketApi.register(payload));
		yield put(succes(data.message));
	} catch (e) {
		yield put(error(e));
	}
}

export function* watcher() {
	yield takeEvery('GET_ROLE', roleWorker);
	yield takeEvery('GET_USER', userWorker);
	yield takeEvery('GET_USERS', usersWorker);
	yield takeEvery('LOGIN', loginWorker);
	yield takeEvery('REGISTER', registerWorker);
}
