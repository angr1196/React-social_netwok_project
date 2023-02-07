

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT ='SET_TOTAL_COUNT_USERS';
const TOGGLE_IS_FETCHING ='TOGGLE_IS_FETCHING';


let initaialState = {
    users: [],
    currentPage: 1,
    pageSize: 100,
    totalUsersCount: 0,
    isFetching: true,

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
            
        case TOGGLE_IS_FETCHING:
            return{
                ...state, isFetching: action.isFetching
            }

        default:
            return state;
    }
}

export const followAC = (id) => ({type: FOLLOW, userID: id})
    
export const unfollowAC = (id) => ({type: UNFOLLOW, userID: id})

export const setCurrentPageAC = (page)=>({type: SET_CURRENT_PAGE, currentPage: page,})

export const setTotalUsersCountAC = (usersCount)=>({type: SET_TOTAL_USERS_COUNT, count: usersCount})

export const setUsersAC = (users) => ({type: SET_USERS, users})

export const toggleIsFetchingAC = (isFetching)=> ({type: TOGGLE_IS_FETCHING, isFetching})

export default usersReducer;
