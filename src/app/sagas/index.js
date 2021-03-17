import counter from "./counter.saga";
import { all, call } from "redux-saga/effects";
export default function* rootSaga() {
    yield all([call(counter)]);
}
