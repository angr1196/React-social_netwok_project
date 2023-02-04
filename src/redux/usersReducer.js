

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET_STATE';

let initaialState = {
    users: [
        {
            id: 1, avaURL: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
            following: true, fullName: 'Dima', status: 'I like JS', location: { country: 'Ukraine', city: 'Kyiv' }},
        {
            id: 2, avaURL: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
            following: false, fullName: 'Aleksey', status: 'I like React', location: { country: 'Poland', city: 'Warsaw' }},
        {
            id: 3, avaURL: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
            following: false, fullName: 'Kolya', status: 'I like Redux', location: { country: 'Ukraine', city: 'Kharkiv' }},
        {
            id: 4, avaURL: 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/lldeQ91GwIVff43JBrpdbAAeYWj.jpg',
            following: true, fullName: 'Vika', status: 'I like IT', location: { country: 'Turkey', city: 'Alanya' }}
    ]
}

const usersReducer = (state = initaialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (action.userID === u.id) {
                        return { ...u, following: true }
                    }
                    return u;
                })]
            };

        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (action.userID === u.id) {
                        return { ...u, following: false }
                    }
                    return u;
                })]
            };

        case SET_STATE:
            return {
                ...state,
                users: [...state.users, action.usersData]
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

export const setUsersAC = (users) => {
    return {
        type: SET_STATE,
        usersData: users
    }
}

export default usersReducer;
