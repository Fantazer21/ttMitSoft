import {applyMiddleware, combineReducers, createStore} from "redux";
import createSagaMiddleware from "@redux-saga/core";
import {photosReducer} from "./photosReducer";


const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    photos: photosReducer,
})

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

export type AppRootStateType = ReturnType<typeof rootReducer>