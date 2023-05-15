import React, { useEffect } from 'react'
import { styled } from "@mui/system";
import { Messages } from './messages/Messages';
import NewMesageInput from './NewMesageInput';
const Wrapper = styled("div")({
    flexGrow: 1,
});

export const MessageContent = ({ chosenChatDetail }) => {
    useEffect(() => {

    }, [chosenChatDetail])
    return (
        <Wrapper>
            <Messages />
            <NewMesageInput />
        </Wrapper>
    )
}
