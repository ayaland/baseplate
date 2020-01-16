import React from 'react';


<<<<<<< HEAD
function ProjectCard(props) {
=======
class ProjectCard extends React.Component {
    render() {
>>>>>>> b3127252a0f0137b755af78034f06c48b06dc11f
        return (
            <main>
                <article className="project-card">
                    <a href="/" className="card_link">
                        <div className="card_content">
<<<<<<< HEAD
                            <h2 className="card_title flush">{props.project.name}</h2>
                            <p className="card_description flush">{props.title}</p>
=======
                            <h2 className="card_title flush">{this.props.project.name}</h2>
                            <p className="card_description flush">{this.props.title}</p>
>>>>>>> b3127252a0f0137b755af78034f06c48b06dc11f
                            <img className="card_avatar" src={window.demo_avatar} />
                        </div>
                    </a>
                </article>
            </main>
        );
}

<<<<<<< HEAD
export default ProjectCard;
=======
const mapStateToProps = (state) => {
    console.log(state);
    return state;
    // return {
    //     currentUser: users[session.id]
    // };
};

export default connect(mapStateToProps)(ProjectCard);
>>>>>>> b3127252a0f0137b755af78034f06c48b06dc11f
