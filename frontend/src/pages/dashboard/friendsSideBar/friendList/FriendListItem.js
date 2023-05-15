import React from 'react'
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar } from '../../../../components/shared/Avatar';
import { OnlineIndicator } from './OnlineIndicator';
export const FriendListItem = ({ id, username, isOnline }) => {
    //console.log(isOnline)
    return (

        <Button
            style={{
                width: "100%",
                height: "42px",
                marginTop: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                textTransform: "none",
                color: "black",
                position: "relative",
            }}
        >
            <Avatar username={username} />
            <Typography
                style={{
                    marginLeft: "7px",
                    fontWeight: 700,
                    color: "#8e9297",
                }}
                variant="subtitle1"
                align="left"
            >
                {username}
            </Typography>
            {isOnline && <OnlineIndicator />}
        </Button>
    );
};