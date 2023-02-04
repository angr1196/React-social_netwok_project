import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";


let obj = {
    dialogPage: dialogsReducer, 
    profilePage: profileReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
 
}

let reducers = combineReducers(obj);

let store = legacy_createStore(reducers);

export default store;
