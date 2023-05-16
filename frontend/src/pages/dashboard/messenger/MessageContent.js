import React, { useEffect } from 'react'
import { styled } from "@mui/system";
import Messages from './messages/Messages';
import NewMesageInput from './NewMesageInput';
import { getDirectChatHistory } from '../../../realTimeChat/socketConnection';
const Wrapper = styled("div")({
    flexGrow: 1,
});

export const MessageContent = ({ chosenChatDetails }) => {
    useEffect(() => {
        getDirectChatHistory({
            receiverUserId: chosenChatDetails.id,
        });
    }, [chosenChatDetails])
    return (
        <Wrapper>
            <Messages />
            <NewMesageInput />
        </Wrapper>
    )
}
