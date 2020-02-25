import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createProject, fetchProjects } from '../../actions/project_actions'
import ProjectCard from './project_card';

class ProjectIndex extends React.Component {
    componentDidMount() {
        this.props.fetchProjects();
    }

    makeTitle(project) {
        return (project.description.length > 50
            ? project.description.slice(0, 60).concat('...')
            : project.description
        );
    }

    render() {
        return (
            <main>
                <div className="panel">
                    <section className="project-index">
                        <header className="centered">
                            <h1 className="push--top push_half--bottom">
                                Your Projects
                            </h1>
                        </header>

                        <div className="">
                            {this.props.projects.map((project) => (
                                <ProjectCard project={project} key={project.id} title={this.makeTitle} />
                            ))}

                            <article className="project-card">
                                <Link to={`/projects/new`} className="card_link">
                                    <div className="card_add-project">
                                        <img width="60" height="60" src={window.green_plus} />
                                        <br />
                                        Add another project
                                    </div>
                                </Link>
                            </article>
                        </div>
                        <div className="centered push--top">
                            <a className="btn btn--primary txt-bold" href="http://www.bricklink.com/">Need more materials? Check out Bricklink!</a>
                        </div>
                    </section>
                </div>
            </main>
        );
    }

}

// ownProps will be able to match params to userId
const mapStateToProps = (state) => {
    return {
        projects: Object.values(state.entities.projects),
        sessionId: state.session.id
    };
};

const mapDispatchToProps = (dispatch) => ({
    createProject: () => dispatch(createProject(project)),
    fetchProjects: () => dispatch(fetchProjects()),
    fetchProject: (id) => dispatch(fetchProject(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectIndex);