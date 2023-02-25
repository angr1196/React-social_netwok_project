import { authAPI } from "../api/api";


const SET_USER_DATA = 'SET_USER_DATA';

let initaialState = {

    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initaialState, action) => {

    switch (action.type) {

        case SET_USER_DATA:
                return {
                    ...state,
                    ...action.data,
                    isAuth: true
                };

        default:
            return state;
    }
}

export const setAuthUserData = (userId, login, email) => ({ type: SET_USER_DATA , data: {userId, login, email }});

export const getAuthUserData = ()=>{
    return (dispatch)=>{
        authAPI.getAuthUserData().then(data => {
            if(data.resultCode===0){
              let id = data.data.id;
              let login = data.data.login;
              let email = data.data.email;
              dispatch(setAuthUserData(id, login, email));
            }
    
        }
        )
    }
}

export default authReducer;