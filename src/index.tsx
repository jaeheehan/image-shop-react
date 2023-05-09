import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import rootReducer, {rootSaga} from "./modules";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import Cookies from "js-cookie";
import { setAccessToken, checkMyInfo } from "./modules/auth";
import client from "./lib/client"

const sagaMiddleware = createSagaMiddleware();

const store =createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser() {
    try {
        const savedToken = Cookies.get("accessToken")

        if(!savedToken) return;

        store.dispatch(setAccessToken(savedToken))

        client.defaults.headers.common.Authorization = `Bearer ${savedToken}`;

        store.dispatch(checkMyInfo())
    } catch (e) {
        console.log(e)
    }
}

sagaMiddleware.run(rootSaga);

loadUser();

// @ts-ignore
const myRouter = <BrowserRouter>
    <App />
</BrowserRouter>

const root = ReactDOM.render(
    <Provider store={store}>
        {myRouter}
    </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
