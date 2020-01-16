import React from 'react';


function ProjectCard(props) {
        return (
                <article className="project-card">
                    <a href="/" className="card_link">
                        <div className="card_content">
                            <h2 className="card_title flush">{props.project.name}</h2>
                            <p className="card_description flush">{props.title(props.project)}</p>
                            <img className="card_avatar" src={window.demo_avatar} />
                        </div>
                    </a>
                </article>
        );
}

export default ProjectCard;