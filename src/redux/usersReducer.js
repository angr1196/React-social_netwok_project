

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initaialState = {
    users: []
}

const usersReducer = (state = initaialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userID === u.id) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            };

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (action.userID === u.id) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }

        default:
            return state;
    }
}

export const followAC = (id) => {
    return {
        type: FOLLOW,
        userID: id,
    }
};

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        userID: id,
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
