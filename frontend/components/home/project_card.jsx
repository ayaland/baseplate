import React from 'react';


function ProjectCard(props) {
        return (
            <main>
                <article className="project-card">
                    <a href="/" className="card_link">
                        <div className="card_content">
                            <h2 className="card_title flush">{props.project.name}</h2>
                            <p className="card_description flush">{props.title}</p>
                            <img className="card_avatar" src={window.demo_avatar} />
                        </div>
                    </a>
                </article>
            </main>
        );
}

export default ProjectCard;