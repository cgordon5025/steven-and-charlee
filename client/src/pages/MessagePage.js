import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_MESSAGES } from "../utils/queries";
import { ADD_MESSAGE } from "../utils/mutations";
import { Link } from "react-router-dom";
import MessageList from '../components/MessageList'
import { Modal } from "react-bootstrap/Modal";
const MessagePage = () => {
    const { loading, data } = useQuery(GET_MESSAGES);
    const messages = data?.getMessage || []
    const [showModal, setShowModal] = useState(false);
    const [create] = useMutation(ADD_MESSAGE);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);
    
    return (
        <div>
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    messages ? (
                        <MessageList messages={messages} />
                    ) : (
                        <h3> No Messages yet be the first!</h3>
                    )

                )
            }
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Link className="btn btn-block btn-info" to='/newMessage'> Post a Message</Link>
            </div>
        </div>
    )
}


export default MessagePage