import io from "socket.io-client";
import store from "../redux/store"
import { setFriends, setOnlineUsers, setPendingFriendsInvitations } from "../redux/actions/friendsActions";
import { updateDirectChatHistoryIfActive } from "../components/utils/chat";

let socket = null;

export const connectWithSocketServer = (userDetails) => {
    const jwtToken = userDetails.token;
    console.log(jwtToken)
    socket = io("http://localhost:5001", {
        auth: {
            token: jwtToken,
        },
    });

    socket.on("connect", () => {
        console.log("succesfully connected with socket.io server");
        console.log(socket.id);
    });
    socket.on("friends-invitations", (data) => {
        const { pendingInvitations } = data;
        //console.log("socket friend invitation event is working")
        store.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });
    socket.on("friends-list", (data) => {
        const { friends } = data;
        console.log(friends)
        store.dispatch(setFriends(friends))
    });

    socket.on("online-users", (data) => {
        const { onlineUsers } = data;
        //console.log("is online event is working");
        store.dispatch(setOnlineUsers(onlineUsers));
    });
    socket.on("direct-chat-history", (data) => {
        console.log("direct chat event is working");
        console.log(data);
        updateDirectChatHistoryIfActive(data);
    });

}
export const sendDirectMessage = (data) => {
    console.log(data);
    socket.emit("direct-message", data);
};

export const getDirectChatHistory = (data) => {
    socket.emit("direct-chat-history", data);
};