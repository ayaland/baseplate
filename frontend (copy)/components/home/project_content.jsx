import React from 'react';

function ProjectContent(props) {
    return (
        <div>

            <h2 className="card_title flush">{props.project.name}</h2>
            <p className="card_description flush">{props.title}</p>
            <img className="card_avatar" src={window.demo_avatar} />
        </div>
    );
}

export default ProjectContent;