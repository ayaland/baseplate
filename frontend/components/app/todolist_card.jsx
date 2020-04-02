import React from 'react';
import { Link } from 'react-router-dom';


function TodosCard(props) {
    let lists = props.lists.reverse()
    // let todos=[];
    return (
        <article className="card card--app">
            <Link to={`/projects/${props.project.id}/lists`} className="card_link">
                <div className="card_content">
                    <header className="card_header centered">
                        {/* <h1 className="flush txt--truncate">{props.app.name}</h1> */}
                        <h1 className="flush txt--truncate">To-dos</h1>
                    </header>

                    <section className="push_half--top">
                        {lists.length < 1
                            ? (
                                <div className="card_description align--center">
                                    <p className="flush">
                                        Make lists of work that need to get done, assign items, set due dates, and discuss
                                        </p>
                                </div>)
                            : (
                                <div className="messages-div message-preview flush--top">
                                    {lists.map((list) => (
                                        <div className="app_card-outer" key={list.id}>
                                            <div className="app_card messageboard_card-title txt-bold">
                                                {list.title}
                                            </div>
                                            {/* <div className="app_card messageboard_card-body">
                                                {list.title}
                                            </div> */}
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

export default TodosCard;