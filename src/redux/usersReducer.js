

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_COUNT_USERS';


let initaialState = {
    users: [],
    currentPage: 1,
    pageSize: 100,
    totalUsersCount: 0,

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
                ...state, users: action.users
            }

        case SET_CURRENT_PAGE:
                return {
                    ...state, currentPage: action.currentPage
                }

         case SET_TOTAL_USERS_COUNT:
            return{
                ...state, totalUsersCount: action.count
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
}

export const unfollowAC = (id) => {
    return {
        type: UNFOLLOW,
        userID: id,
    }
}

export const setCurrentPageAC = (page)=>{
    return{
        type: SET_CURRENT_PAGE,
        currentPage: page,
    }
}

export const setTotalUsersCountAC = (usersCount)=>{
    return{
        type: SET_TOTAL_USERS_COUNT,
        count: usersCount
    }
}

export const setUsersAC = (users) => ({type: SET_USERS, users})

export default usersReducer;
