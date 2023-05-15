import axios from 'axios'
import { logout } from '../components/utils/auth';

const apiClient = axios.create({
    baseURL: "http://localhost:5001/api/v1",
    timeout: 10000
})

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem("user");

        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export const login = async (data) => {
    try {
        return await apiClient.post("/login", data)
    } catch (err) {
        return {
            error: true,
            err
        }
    }

}

export const register = async (data) => {
    try {
        return await apiClient.post("/register", data)
    } catch (err) {
        return {
            error: true,
            err
        }
    }

}

// secure routes
export const sendFriendInvitationAction = async (data) => {
    try {
        return await apiClient.post("/friend-invitation/invite", data);
    } catch (err) {
        checkResponseCode(err);
        return {
            error: true,
            err,
        };
    }
};

export const acceptFriendInvitationAction = async (data) => {
    try {
        return await apiClient.post("/friend-invitation/accept", data);
    } catch (err) {
        checkResponseCode(err);
        return {
            error: true,
            err,
        };
    }
};

export const rejectFriendInvitationAction = async (data) => {
    try {
        return await apiClient.post("/friend-invitation/reject", data);
    } catch (err) {
        checkResponseCode(err);
        return {
            error: true,
            err,
        };
    }
};


const checkResponseCode = (exception) => {
    const responseCode = exception?.response?.status;

    if (responseCode) {
        (responseCode === 401 || responseCode === 403) && logout();
    }
};