import React, { useEffect } from 'react'
import { styled } from "@mui/system";
import SideBar from './dashboard/SideBar';
import { FriendsSideBar } from './dashboard/FriendsSideBar';
import { Messenger } from './dashboard/Messenger';
import { AppBar } from './dashboard/AppBar';
import { connect } from "react-redux";
import { logout } from '../components/utils/auth';
import { getActions } from '../redux/actions/authActions';
import { connectWithSocketServer } from '../realTimeChat/socketConnection';


const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
});
const Dashboard = ({ setUserDetails }) => {

    useEffect(() => {
        const userDetails = localStorage.getItem("user");
        console.log(userDetails)
        if (!userDetails) {
            logout();
        } else {
            setUserDetails(JSON.parse(userDetails));
            connectWithSocketServer(JSON.parse(userDetails));
        }
    }, []);
    return (
        <Wrapper>
            <SideBar />
            <FriendsSideBar />
            <Messenger />
            <AppBar />
        </Wrapper>
    )
}
const mapActionsToProps = (dispatch) => {
    return {
        ...getActions(dispatch),
    };
};
export default connect(null, mapActionsToProps)(Dashboard);