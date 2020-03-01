import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';

function MessageCard(props) {
    let name = props.message.author_name
    let d = new Date(props.message.created_at).toString()
    let date = d.split(' ')
    return (
        <article className="message-card">
            <Link to={{
                pathname: `/projects/${props.projectId}/messages/${props.message.id}`,
                project: props.project,
                message: props.message,
                author_name: props.message.author_name
            }}
            className="message_link">

            <div className="message_content">
                <table className="messages-table">
                    <tbody>
                        <tr>
                            <td className="message_avatar">
                                {
                                name === "Forestman2"  &&
                                    <img className="" src={window.forestman_avatar} />
                                }
                                {
                                name === "Blacktron"  &&
                                    <img className="" src={window.blacktron_avatar} />
                                }
                                {
                                name === "Minifig"  &&
                                    <img className="" src={window.demo_avatar} />
                                }
                            </td>
           
                            <td className="">
                                <h1 className="message_title flush">{props.message.title}</h1>             
                                    <span className="message-date-and-body message flush txt-uncolor">
                                        {props.message.author_name} • {' '}  
                                        {date[0]} {date[1]} {date[2]} — {' '}
                                        {ReactHtmlParser(props.message.body)}
                                    </span>
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