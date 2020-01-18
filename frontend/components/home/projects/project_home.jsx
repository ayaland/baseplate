import React from 'react';
import { connect } from 'react-redux';

import { fetchProject } from '../../../actions/project_actions';
import AppCard from './app_card';

class ProjectHome extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.projectId);
    }

    render() {
        // Ayanote: .map got around the error of projects being empty; we need 
        // to bypass the loop one time and then after componentDidMount runs, 
        // we can access props
        if (this.props.projects.length === 0 || this.props.users.length === 0)
            return null;
        else {
            return (
                <>
                    <header className="project-header project-header--for-home centered">
                        <h1 className="project-header_name--overview">{this.props.projects[0].name}</h1>
                        <h4 className="project-header_description normal">{this.props.projects[0].description}</h4>
                    </header>
                    <section className="project-dock centered">
                        <div className="card-grid">
                            <AppCard sessionId={this.props.sessionId} projectId={this.props.projects[0].id} />
                            {/* (this.props.apps.map((app) => (
                                <AppCard app={app} />
                            )) */}
                        </div>
                    </section>
                </>
            );
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        projects: Object.values(state.entities.projects),
        users: Object.values(state.entities.users),
        sessionId: state.session.id
    }
};

const mapDispatchToProps = (dispatch) => ({
        fetchProject: (id) => dispatch(fetchProject(id))
        
});

export default connect(mapStateToProps, mapDispatchToProps)(ProjectHome);

