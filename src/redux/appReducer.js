import { authAPI } from "../api/api";
import { getAuthUserData } from "./authReducer";


const SET_IS_INITIALIZED = 'SET_IS_INITIALIZED';

let initaialState = {

    isInitialized: false,
}

const appReducer = (state = initaialState, action) => {
    switch (action.type) {

        case SET_IS_INITIALIZED:
            return {
                ...state,
                isInitialized: true,
            };
        default:
            return state;
    }
}

export const setIsInitialized = () => ({ type: SET_IS_INITIALIZED });


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData())
    Promise.all([promise])
        .then(() => {
            dispatch(setIsInitialized())
        })
}


export default appReducer;