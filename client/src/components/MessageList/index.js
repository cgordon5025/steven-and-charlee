import React from "react";

const MessageList = ({ messages }) => {
    const styles = {
        card: {
            width: "18rem",
            height: "fit-content",
        },
        messageContainer: {
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
        },
    };

    return (
        <>

            <h2 className="text-center">Messages</h2>
            <div style={styles.messageContainer}>
                {messages.map((message) => {
                    return (
                        <div className="card" key={message._id} style={styles.card}>
                            <h2 className="card-title">{message.note}</h2>
                            <h5 className="card-subtitle">{message.name}</h5>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default MessageList