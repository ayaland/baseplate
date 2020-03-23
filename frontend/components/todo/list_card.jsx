import React from 'react'
import { Link } from 'react-router-dom';

function ListCard(props) {
    return (
        <article className="list-card">
            <Link to={{
                pathname: `/projects/${props.projectId}/lists/${props.list.id}`,
                project: props.project,
                list: props.list,
            }}
            className="list_link">
                <header className="list_header">
                    <h3 className="list_title">{props.list.title}</h3>

                </header>
            </Link>
        </article>
    );
}

export default ListCard;