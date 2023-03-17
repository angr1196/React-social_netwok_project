
import axios from "axios"

let baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    headers: {"API-KEY": "4a7f6ff5-a912-4a89-807b-a11c2d516199"},
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=
        ${currentPage}&count=${pageSize}`, { withCredentials: true }).then(response => response.data)

    },

    follow(userId) {
        return instance.post(`follow/${userId}`, {},)
    },

    unfollow(userId) {
        return instance.delete(baseURL + `follow/${userId}`)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(baseURL + `profile/` + userId).then(response => response.data)
    },

    getUserStatus(userId){
        return instance.get(`profile/status/` + userId).then(response =>response.data)
    },

    updateUserStatus(status){
        return instance.put(`profile/status`, {status: status})
    }

}

export const authAPI ={
getAuthUserData(){
    return instance.get(baseURL + `auth/me`, { withCredentials: true })
    .then(response => response.data)
},

loginUser(email, password, rememberMe = false){
    return instance.post(`auth/login`, { email, password, rememberMe })
    .then(response => response.data)

},

logoutUser(){
    return instance.delete(`auth/login`)
}

}





