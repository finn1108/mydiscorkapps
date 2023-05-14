import * as api from "../apiClient"
import { openAlertMessage } from "./alertActions";

export const authActions = {
    SET_USER_DETAILS: "AUTH.SET_USER_DETAILS",
};


export const getActions = (dispatch) => {
    return {
        loginAction: (userDetails, history) => dispatch(loginUser(userDetails, history)),
        registerAction: (userDetails, history) =>
            dispatch(registerUser(userDetails, history)),
        setUserDetails: (userDetails) => dispatch(setUserDetails(userDetails)),
    };
};

const setUserDetails = (userDetails) => {
    return {
        type: authActions.SET_USER_DETAILS,
        userDetails,
    };
};

const loginUser = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.login(userDetails);
        //console.log(response);
        // console.log(response?.err.response.data);
        if (response.error) {
            dispatch(openAlertMessage(response?.err.message));
        } else {
            const { userLoginDetails } = response.data;
            console.log(userLoginDetails)
            localStorage.setItem("user", JSON.stringify(userLoginDetails));

            dispatch(setUserDetails(userDetails));
            history.push("/dashboard");
        }
    };
};

const registerUser = (userDetails, history) => {
    return async (dispatch) => {
        const response = await api.register(userDetails);
        //console.log(response);
        if (response.error) {
            dispatch(openAlertMessage(response?.err.message));
        } else {
            const { userDetails } = response?.data;
            localStorage.setItem("user", JSON.stringify(userDetails));

            // dispatch(setUserDetails(userDetails));
            history.push("/dashboard");
        }
    };
};