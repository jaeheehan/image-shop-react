import { combineReducers } from "redux";
import { all } from "redux-saga/effects"
import auth , {authSaga} from "./auth"
import { AuthState } from "../modules/auth"
import { CodeGroupState} from "../modules/codegroup";
import { LoadingState } from "./loading";
import loading from './loading'
import codeGroup, {codeGroupSaga} from "./codegroup";

export interface RootState {
    auth: AuthState;
    codeGroup: CodeGroupState;
    loading: LoadingState;
}

const rootReducer = combineReducers({
    auth,
    loading,
    codeGroup
});

export function* rootSaga() {
    yield all([
        authSaga(),
        codeGroupSaga(),
    ]);
}

export default rootReducer;