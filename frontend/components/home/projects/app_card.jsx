import React from 'react';
import { Link } from 'react-router-dom'

function AppCard(props) {
    return (
        <article className="card card--app">
            <Link to="/" className="card_link">
                <div className="card_content">
                    <header className="card_header centered">
                        {/* <h1 className="flush txt--truncate">{props.app.name}</h1> */}
                        <h1 className="flush txt--truncate">Message Board</h1>
                    </header>
                    <section className="push_half--top">
                        <div className="card_blank-slate">
                            <div className="card_icon card_icon--messages"></div>
                            <div className="card_description align--center">
                                <p className="flush">
                                    Post announcements, pitch ideas, progress updates, etc. and keep feedback on-topic.
                                </p>
                            </div>
                            <div className="card_body-content">
                                <div className="messages-table messages-table--for-card">
                                    {/* one of these is made for each message rendered */}
                                    <div className="messages-table_cell messages-table_avatar">
                                        {/* 64x64 avatar goes here */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            
            </Link>

        </article>
    )
}

export default AppCard;