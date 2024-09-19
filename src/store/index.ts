import { createStore, applyMiddleware} from "redux";
import { configureStore, Tuple } from '@reduxjs/toolkit'
import { thunk } from "redux-thunk";
import { reducer } from './reducer';

const store = createStore<any, any>(reducer, applyMiddleware(thunk));
// const store = configureStore({
//     reducer,
//     middleware: () => new Tuple(thunk),
// })

export default store;

export type AppStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;