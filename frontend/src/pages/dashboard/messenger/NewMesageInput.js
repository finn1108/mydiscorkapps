import React, { useState } from 'react'
import { styled } from "@mui/system";
import { connect } from "react-redux";


const MainContainer = styled("div")({
    height: "60px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});
const Input = styled("input")({
    backgroundColor: "#2f3136",
    width: "98%",
    height: "44px",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "14px",
    padding: "0 10px",
});
const NewMesageInput = ({ chosenChatDetails }) => {
    const [message, setMessage] = useState("");

    const handleMessageValueChange = (event) => {
        setMessage(event.target.value);
    };
    return (
        <MainContainer>
            <Input
                placeholder={`Write message to ${chosenChatDetails.name}`}
                value={message}
                onChange={handleMessageValueChange}

            />
        </MainContainer>
    )
}
const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat,
    };
};

export default connect(mapStoreStateToProps)(NewMesageInput);