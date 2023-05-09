import React from 'react'
import { styled } from "@mui/system";
import SideBar from './dashboard/SideBar';
import { FriendsSideBar } from './dashboard/FriendsSideBar';
import { Messenger } from './dashboard/Messenger';
import { AppBar } from './dashboard/AppBar';



const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
});
export const Dashboard = () => {
    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
        </Wrapper>
    )
}
