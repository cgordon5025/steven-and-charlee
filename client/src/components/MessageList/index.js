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

    if (!messages) {
        return (
            <h3> No Messages yet be the first!</h3>
        );
    };

    return (
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
    )
}