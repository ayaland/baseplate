import React from 'react';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';


function TodosCard(props) {
    // let todos = props.todos.reverse()
    let todos=[];
    return (
        <article className="card card--app">
            {/* <Link to={`/projects/${props.project.id}/todos`} className="card_link"> */}
                <div className="card_content">
                    <header className="card_header centered">
                        {/* <h1 className="flush txt--truncate">{props.app.name}</h1> */}
                        <h1 className="flush txt--truncate">To-dos</h1>
                    </header>

                    <section className="push_half--top">
                        {todos.length < 1
                            ? (
                                <div className="card_description align--center">
                                    <p className="flush">
                                        Make lists of work that need to get done, assign items, set due dates, and discuss
                                        </p>
                                </div>)
                            : (
                                <div className="messages-div message-preview flush--top">
                                    {todos.map((message) => (
                                        <div className="messageboard_card-outer">
                                            <div className="messageboard_card messageboard_card-title txt-bold">
                                                {ReactHtmlParser(message.title)}
                                            </div>
                                            <div className="messageboard_card messageboard_card-body">
                                                {message.text_body}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )
                        }
                    </section>
                </div>
            {/* </Link> */}
        </article>
    )
}

export default TodosCard;