import { combineReducers, legacy_createStore } from "redux";
import dialogsReducer from "./reducer-dialogs";
import profileReducer from "./reducer-profile";
import sidebarReducer from "./reducer-sideBar";

let obj = {
    dialogPage: dialogsReducer, 
    profilePage: profileReducer,
    sidebar: sidebarReducer,
}

let reducers = combineReducers(obj);

let store = legacy_createStore(reducers);

export default store;
