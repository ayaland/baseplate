import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
        return (
                <article className="project-card">
                    <Link to={{
                        pathname: `/projects/${props.project.id}`,
                        project: props.project,
                        customObject: "customValue"
                        }} 
                        className="card_link">

                        <div className="card_content">
                            <h2 className="card_title flush">{props.project.name}</h2>
                            <p className="card_description flush">{props.title(props.project)}</p>
                            <img className="card_avatar" src={window.demo_avatar} />
                        </div>
                    </Link>
                </article>
        );
}

export default ProjectCard;