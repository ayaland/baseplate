import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard(props) {
    let project = props.project;
        return (
                <article className="project-card">
                    <Link to={{
                        pathname: `/projects/${project.id}`,
                        project: project,
                        }} 
                        className="card_link">

                        <div className="card_content">
                            <h2 className="card_title flush">{project.name}</h2>
                            <p className="card_description flush">{props.title(project)}</p>
                            <img className="card_avatar" src={window.demo_avatar} />
                        </div>
                    </Link>
                </article>
        );
}

export default ProjectCard;