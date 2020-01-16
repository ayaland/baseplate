import React from 'react';
import { connect } from 'react-redux';
import HomeNavbar from '../navbar/home_navbar';
import { createProject, fetchProjects } from '../../actions/project_actions'
import ProjectCard from './project_card';

class HomepageContainer extends React.Component {

    componentDidMount() {
        this.props.fetchProjects()
    }

    makeTitle(project) {
        return (project.description.length > 50
            ? project.description.slice(0, 60).concat('...')
            : project.description
        );
    }

    render() {
        console.log(this.props.projects);
        return (
            <main>
                <HomeNavbar />
                <div className="panel">
                    <section className="project-index">
                        <header className="centered">
                            <h1 className="push--top push_half--bottom">
                                Your Projects
                            </h1>
                        </header>
                        <div className="card-grid">
                        {this.props.projects.map((project) => (
                            <ProjectCard project={project} key={project.id} title={this.makeTitle(project)} />
                        ))}

                            <article className="project-card">
                                <a href="/" className="card_link">
                                    <div className="card_add-project">
                                        add
                                    </div>
                                </a>
                            </article>
                            
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
        projects: Object.values(state.entities.projects)
    };
};

const mapDispatchToProps = (dispatch) => ({
    createProject: () => dispatch(createProject(project)),
    fetchProjects: () => dispatch(fetchProjects())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer);