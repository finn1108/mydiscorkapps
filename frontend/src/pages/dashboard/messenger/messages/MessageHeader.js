import React from 'react'
import { styled } from "@mui/system";
import { Avatar } from '../../../../components/shared/Avatar'
import Typography from "@mui/material/Typography";

const MainContainer = styled("div")({
    width: "98%",
    display: "column",
    marginTop: "10px",
});
export const MessageHeader = ({ name = "" }) => {
    return (
        <MainContainer>
            <Avatar large username={name} />
            <Typography
                variant="h4"
                sx={{
                    fontWeight: "bold",
                    color: "white",
                    marginLeft: "5px",
                    marginRight: "5px",
                }}
            >
                {name}
            </Typography>
            <Typography
                sx={{
                    color: "#b9bbbe",
                    marginLeft: "5px",
                    marginRight: "5px",
                }}
            >
                Let's start your conversation with {name}!
            </Typography>
        </MainContainer>
    )
}
