import React from 'react'
import { styled } from "@mui/system";
import { MessageHeader } from './MessageHeader';
import { DateSeperator } from './DateSeperator';
import { Message } from './Message';
import { connect } from 'react-redux';
const MainContainer = styled("div")({
    height: "calc(100% - 60px)",
    overflow: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
});
const DUMMY_MESSAGES = [
    {
        _id: 1,
        content: "hello",
        sameAuthor: false,
        author: {
            username: "Marek",
        },
        date: "22/01/2022",
        sameDay: false,
    },
    {
        _id: 2,
        content: "hello once again",
        sameAuthor: true,
        author: {
            username: "Marek",
        },
        date: "22/01/2022",
        sameDay: true,
    },
    {
        _id: 3,
        content: "hello third time",
        sameAuthor: true,
        author: {
            username: "Marek",
        },
        date: "23/01/2022",
        sameDay: false,
    },
    {
        _id: 4,
        content: "hello response first time",
        sameAuthor: false,
        author: {
            username: "John",
        },
        date: "23/01/2022",
        sameDay: true,
    },
    {
        _id: 5,
        content: "hello response third time",
        sameAuthor: true,
        author: {
            username: "John",
        },
        date: "24/01/2022",
        sameDay: false,
    },
];

const convertDateToHumanReadable = (date, format) => {
    const map = {
        mm: date.getMonth() + 1,
        dd: date.getDate(),
        yy: date.getFullYear().toString().slice(-2),
        yyyy: date.getFullYear(),
    };

    return format.replace(/mm|dd|yy|yyy/gi, (matched) => map[matched]);
};

const Messages = ({ chosenChatDetails, messages }) => {
    return (
        <MainContainer>
            <MessageHeader name={chosenChatDetails?.name} />

            {
                messages.map((message, index) => {
                    const sameAuthor = index > 0 && messages[index].author._id === messages[index - 1].author._id;

                    const sameDay =
                        index > 0 &&
                        convertDateToHumanReadable(new Date(message.date), "dd/mm/yy") ===
                        convertDateToHumanReadable(
                            new Date(messages[index - 1].date),
                            "dd/mm/yy"
                        );

                    return (
                        <div key={message._id} style={{ width: "97%" }}>
                            {(!sameDay || index === 0) && (
                                <DateSeperator
                                    date={convertDateToHumanReadable(
                                        new Date(message.date),
                                        "dd/mm/yy"
                                    )}
                                />
                            )}
                            <Message
                                content={message.content}
                                username={message.author.username}
                                sameAuthor={sameAuthor}
                                date={convertDateToHumanReadable(
                                    new Date(message.date),
                                    "dd/mm/yy"
                                )}
                                sameDay={sameDay}
                            />


                        </div>
                    );
                })
            }
        </MainContainer >
    )
}
const mapStoreStateToProps = ({ chat }) => {
    return {
        ...chat,
    };
};

export default connect(mapStoreStateToProps)(Messages);