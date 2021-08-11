import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://178.128.196.163:3000/api/',
})

const getUsersAPI = {
    getUsers() {
    return instance.get('records/')
        .then(response => response.data)}
}

export const authAPI = {
    authMe() {
        return instance.get(`auth/me`)
            .then(response => response.data)
    }
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    }
}

export const followAPI = {
    followingUser(userId) {
        return instance.post(`follow/${userId}`)
    },
    unfollowingUser(userId) {
        return instance.delete(`follow/${userId}`)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get(`profile/${userId}`)
    },
    getStatus (userId) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put(`profile/status`, {status: status})
    }
}