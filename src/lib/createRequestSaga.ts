import { createAction } from "redux-actions";
import { call , put} from "redux-saga/effects";
import { AxiosResponse} from "axios";

export default function createRequestSaga(type:string, request:any){

    const CALL_SUCCESS = `${type}_SUCCESS`;
    const CALL_FAILURE = `${type}_FAILURE`;

    const callSuccess = createAction(CALL_SUCCESS, (data: string) => data);
    const callFailure = createAction(CALL_FAILURE, (err:any) => err);

    return function*(action:any){

    }
}