import { all, fork, takeLatest, put, delay, call } from "redux-saga/effects";
import {
delayincrement,increment
} from "../../features/counter/counterSlice";

function* login() {
  console.log('지나기니3')
    try {
        yield delay(1000);

    yield put(increment());
  } catch (e) {
  }
}

function* watchLogin() {
    console.log('지나가니2')

  yield takeLatest(delayincrement, login);
}

export default function* loginSaga() {
    console.log('지나가니1')
  yield all([fork(watchLogin)]);
}
