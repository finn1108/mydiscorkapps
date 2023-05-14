import io from "socket.io-client";
import friends from "../redux/store"
import { setPendingFriendsInvitations } from "../redux/actions/friendsActions";

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
        console.log("socket friend invitation event is working")
        friends.dispatch(setPendingFriendsInvitations(pendingInvitations));
    });

}