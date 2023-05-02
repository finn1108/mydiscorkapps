import axios from 'axios'

const apiClient = axios.create({
    baseURL: "http://localhost:5001/api/v1",
    timeout: 10000
})

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