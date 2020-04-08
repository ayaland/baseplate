import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';


function MessageboardCard(props) {
    let messages = props.messages.reverse()
    return (
        <article className="card card--app">
            <Link to={`/projects/${props.project.id}/messages`} className="card_link">
                <div className="card_content">
                    <header className="card_header centered">
                        {/* <h1 className="flush txt--truncate">{props.app.name}</h1> */}
                        <h1 className="flush txt--truncate">Message Board</h1>
                    </header>

                    <section className="push_half--top">
                            { messages.length < 1 
                                ? (
                                    <div className="card_description align--center">
                                        <p className="flush">
                                            Post announcements, pitch ideas, progress updates, etc. and keep feedback on-topic.
                                        </p>
                                    </div>)
                                : (
                                    <div className="messages-div message-preview flush--top">
                                        {messages.map((message) => (
                                            <div className="app_card-outer" key={message.id}>
                                                <div className="app_card messageboard_card-title txt-bold">
                                                    {ReactHtmlParser(message.title)}
                                                </div>
                                                <div className="app_card messageboard_card-body">
                                                    {message.text_body}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                    </section>
                </div>
            </Link>
        </article>
    )
}

export default MessageboardCard;