import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

function MessageCard(props) {
    return (
        <article className="message-card">
            <Link to={{
                pathname: `/projects/${props.projectId}/messages/${props.message.id}`,
                project: props.project,
                message: props.message,
                authorId: props.message.owner_id
            }}
            className="message_link">

            <div className="message_content">
                <table>
                    <tbody>
                        <tr>
                            <td className="message_avatar">
                                <img className="" src={window.forestman_avatar} />
                            </td>
                            <td>
                                <h1 className="message_title flush">{props.message.title}</h1>                       
                                {/* <p className="message flush">{props.message.body}</p> */}
                                <span className="message flush">{ ReactHtmlParser (props.message.body) }</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            </Link>
        </article>
    );
}

export default MessageCard;