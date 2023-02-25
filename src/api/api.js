
import axios from "axios"

let baseURL = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(baseURL + `users?page=
        ${currentPage}&count=${pageSize}`, { withCredentials: true }).then(response => response.data)

    },

    follow(userId) {
        return instance.post(baseURL + `follow/${userId}`, {},)
    },

    unfollow(userId) {
        return instance.delete(baseURL + `follow/${userId}`)
    }
}

export const profileAPI = {
    getUserProfile(userId) {
        return instance.get(baseURL + `profile/` + userId).then(response => response.data)
    },

}

export const authAPI ={
getAuthUserData(){
    return instance.get(baseURL + `auth/me`, { withCredentials: true })
    .then(response => response.data)
}

}



