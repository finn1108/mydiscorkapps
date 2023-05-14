import React from 'react'

import { styled } from "@mui/system";
import { AddFriendsButton } from './friendsSideBar/AddFriendsButton';
import { FriendTitle } from './friendsSideBar/FriendTitle';
import { FriendList } from './friendsSideBar/FriendList';

import PendingInvitationList from './friendsSideBar/PendingInvitationList';
const MainContainer = styled("div")({
    width: "224px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#2F3136",
});
export const FriendsSideBar = () => {
    return (
        <MainContainer>

            <AddFriendsButton />
            <FriendTitle title="Private Messages" />
            <FriendList />
            <FriendTitle title={"Invitations"} />
            <PendingInvitationList />
        </MainContainer>
    )
}
