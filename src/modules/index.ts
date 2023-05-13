import { combineReducers } from "redux";
import { all } from "redux-saga/effects"
import auth , {authSaga} from "./auth"
import { AuthState } from "../modules/auth"
import { CodeGroupState } from "../modules/codegroup";
import { LoadingState } from "./loading";

export interface RootState {
    auth: AuthState;
}

const rootReducer = combineReducers({
    auth
});

export function* rootSaga() {
    yield all([
        authSaga()
    ]);
}

export default rootReducer;