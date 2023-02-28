import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import authReducer from "./authReducer";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import  ThunkMiddleware  from "redux-thunk";
import {reducer as formReducer} from "redux-form"


let obj = {
    dialogPage: dialogsReducer, 
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
 
}

let reducers = combineReducers(obj);

let store = legacy_createStore(reducers, applyMiddleware(ThunkMiddleware));

window.store = store;

export default store;
