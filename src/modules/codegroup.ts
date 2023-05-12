import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest } from "redux-saga/effects";
import * as api from "../lib/api"
import createRequestSaga from "../lib/createRequestSaga";
import { CodeGroup } from "../App";

export const FETCH_ONE = "codeGroup/FETCH_ONE";
const FETCH_ONE_SUCCESS = "codeGroup/FETCH_ONE_SUCCESS";
const FETCH_ONE_FAILURE = "codeGroup/FETCH_ONE_FAILURE";

export const FETCH_LIST = "codeGroup/FETCH_LIST";
const FETCH_LIST_SUCCESS = "codeGroup/FETCH_LIST_SUCCESS";
const FETCH_LIST_FAILURE = "codeGroup/FETCH_LIST_FAILURE";

/*const fetchOneSaga = createRequestSaga(FETCH_ONE, api.fetchCodeGroup);
const fetchListSaga = createRequestSaga(FETCH_LIST, api.fetchCodeGroupList);

export function* codeGroupSaga() {
    yield takeLatest(FETCH_ONE, fetchOneSaga);
    yield takeLatest(FETCH_LIST, fetchListSaga);
}*/

