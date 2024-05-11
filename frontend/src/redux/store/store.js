import { combineReducers, legacy_createStore as createStore } from "redux";
import userAuthReducer from "../reducer/userAuthReducer";

export const rootReducer = combineReducers({
    userAuth : userAuthReducer,
})

const store = createStore(rootReducer)

export default store;
