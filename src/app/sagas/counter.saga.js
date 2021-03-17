import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import {
delayincrement,increment
} from "../../features/counter/counterSlice";

function* login() {
    try {
        yield delay(1000);

    yield put(increment());
  } catch (e) {
  }
}

function* watchLogin() {
  yield takeLatest(delayincrement, login);
}

export default function* loginSaga() {
  yield all([fork(watchLogin)]);
}
