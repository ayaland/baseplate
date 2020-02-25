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
                <tr>
                    <td className="message_avatar">
                        <img className="" src={window.forestman_avatar} />
                    </td>
                    <td>
                        <h1 className="message_title flush">{props.message.title}</h1>                       
                        <p className="message flush">{props.message.body}</p>
                    </td>
                </tr>
            </div>
            
            </Link>
        </article>
    );
}

export default MessageCard;