import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MESSAGES } from "../utils/queries";
import { Link } from "react-router-dom";
import MessageList from '../components/MessageList'

const MessagePage = () => {
    const { loading, data } = useQuery(GET_MESSAGES);
    const messages = data?.messages || []

    return (
        <div>
            {
                loading ? (
                    <div>Loading...</div>
                ) : (
                    <MessageList messages={messages} />
                )
            }
            <div>
                <Link className="btn btn-block btn-info" to='/newMessage'> Post a Message</Link>
            </div>
        </div>
    )
}