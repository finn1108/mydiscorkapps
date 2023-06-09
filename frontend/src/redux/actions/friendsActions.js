import * as api from "../apiClient";
import { openAlertMessage } from "./alertActions";
export const friendsActions = {
    SET_FRIENDS: "FRIENDS.SET_FRIENDS",
    SET_PENDING_FRIENDS_INVITATIONS: "FRIENDS.SET_PENDING_FRIENDS_INVITATIONS",
    SET_ONLINE_USERS: "FRIENDS.SET_ONLINE_USERS",
};

export const getActions = (dispatch) => {
    return {
        sendFriendInvitation: (data, closeDialogHandler) =>
            dispatch(sendFriendInvitation(data, closeDialogHandler)),
        acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
        rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data)),
    };
};

export const setPendingFriendsInvitations = (pendingFriendsInvitations) => {
    return {
        type: friendsActions.SET_PENDING_FRIENDS_INVITATIONS,
        pendingFriendsInvitations,
    };
};

export const setFriends = (friends) => {
    console.log(friends)
    return {
        type: friendsActions.SET_FRIENDS,
        friends,
    };
};

export const setOnlineUsers = (onlineUsers) => {
    return {
        type: friendsActions.SET_ONLINE_USERS,
        onlineUsers,
    };
};

const sendFriendInvitation = (data, closeDialogHandler) => {
    return async (dispatch) => {
        const response = await api.sendFriendInvitationAction(data);
        console.log(response)
        if (response.error) {
            dispatch(openAlertMessage(response?.err.response.data));
        } else {
            dispatch(openAlertMessage("Invitation has been sent!"));
            closeDialogHandler();
        }
    };
};

const acceptFriendInvitation = (data) => {
    return async (dispatch) => {
        const response = await api.acceptFriendInvitationAction(data);

        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage("Invitation accepted!"));
        }
    };
};

const rejectFriendInvitation = (data) => {
    return async (dispatch) => {
        const response = await api.rejectFriendInvitationAction(data);

        if (response.error) {
            dispatch(openAlertMessage(response.exception?.response?.data));
        } else {
            dispatch(openAlertMessage("Invitation rejected!"));
        }
    };
};