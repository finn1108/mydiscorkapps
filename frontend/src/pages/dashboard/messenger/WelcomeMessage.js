import React from 'react'
import { Typography } from "@mui/material";
import { styled } from "@mui/system";

const Wrapper = styled("div")({
    flexGrow: 1,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
export const WelcomeMessage = () => {
    return (
        <Wrapper>
            <img src='/icons/message.jpg' alt='' />

        </Wrapper>
    )
}
