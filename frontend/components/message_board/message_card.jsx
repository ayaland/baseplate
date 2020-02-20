import React from 'react';
import { Link } from 'react-router-dom';

function MessageCard(props) {
    return (
        <article className="message-card">
            <Link to={{
                pathname: `/messages/${props.message.id}`,
                message: props.message,
                customObject: "customValue"
            }}
            className="message_link">

            <div className="message_content">
                <h1>{props.message.title}</h1>
                <p className="message">{props.message.body}</p>

            </div>
            
            </Link>
        </article>
    );
}

export default MessageCard;