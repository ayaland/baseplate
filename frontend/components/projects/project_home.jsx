import React from 'react';
import { connect } from 'react-redux';

import { fetchProject } from '../../actions/project_actions';
import AppCard from '../app/app_card';


class ProjectHome extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
    }
    
    // From Jay to address manually typing in an address and having project load
    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.productId !== this.props.match.params.productId) {
    //         this.props.requestProduct(this.props.match.params.productId);
    //     }
    // }

    render() {
        if (!this.props.project) return null;
        let project = this.props.project;
        return (
            <div className="panel panel--perma panel--project push_double--bottom centered">
                <header className="project-header centered">
                    <h1 className="project-header_name">{project.name}</h1>
                    <h4 className="project-header_description normal">{project.description}</h4>
                </header>
                <section className="project-dock centered">
                    <div className="card-grid">
                        <AppCard project={project}/>

                        {/* <AppCard projectId={this.props.projects.projectId} projectId={this.props.projectId} /> */}
                        {/* (this.props.apps.map((app) => (
                                <AppCard app={app} />
                            )) */}
                    </div>
                </section>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        projectId: state.sessionId,
        project: state.entities.projects[ownProps.match.params.projectId]
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHome);