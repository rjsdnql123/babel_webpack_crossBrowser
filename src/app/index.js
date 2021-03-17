import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import counterSlice from "../features/counter/counterSlice";
import rootSaga from "./sagas/index";

const rootReducer = combineReducers({
  counterSlice
});

function createStore() {
    console.log('cresteStore')
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,   
    devTools: true,
    middleware: [sagaMiddleware]
  });
  sagaMiddleware.run(rootSaga);
  return store;
}

export default createStore;
