import React from 'react'
import { styled } from "@mui/system";
const MainContainer = styled("div")({
    height: "calc(100% - 60px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
export const Messages = () => {
    return (
        <MainContainer></MainContainer>
    )
}
