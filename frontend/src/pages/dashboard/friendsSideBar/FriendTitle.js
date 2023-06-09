import React from 'react'
import { Typography } from "@mui/material";
export const FriendTitle = ({ title }) => {
    return (
        <Typography
            sx={{
                textTransform: "uppercase",
                color: "#8e9297",
                fontSize: "14px",
                marginTop: "10px",
            }}
        >
            {title}
        </Typography>
    )
}
