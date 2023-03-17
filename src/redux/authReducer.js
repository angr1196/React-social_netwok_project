import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initaialState = {

    userId: null,
    email: null,
    login: null,
    isAuth: false,
}

const authReducer = (state = initaialState, action) => {
    switch (action.type) {

        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            };
        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email, isAuth) => ({
    type: SET_USER_DATA,
    data: { userId, login, email, isAuth, authError: null }
});


export const getAuthUserData = () => (dispatch) => {
       return authAPI.getAuthUserData().then(data => {
            if (data.resultCode === 0) {
                let id = data.data.id;
                let login = data.data.login;
                let email = data.data.email;
                let isAuth = true;
                dispatch(setAuthUserData(id, login, email, isAuth));
            }

        }
        )
        return "yo"
    }

export const login = (email, password, rememberMe, setError) => {

    return (dispatch) => {
        authAPI.loginUser(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                dispatch(getAuthUserData());
            }
            else {
                setError("server", {
                    type: "custom",
                    message: data.messages
                })
            }
        }
        )
    }
}

export const logout = () => {
    debugger
    return (dispatch) => {
        authAPI.logoutUser().then(data => {
            if (data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        }
        )
    }
}

export default authReducer;