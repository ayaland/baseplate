import React from 'react';
import { connect } from 'react-redux';

import { fetchProject } from '../../actions/project_actions';
import { fetchMessages } from '../../actions/message_actions';
import MessageboardCard from '../app/messageboard_card';
import TodolistCard from '../app/todolist_card';


class ProjectShow extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchMessages(this.props.match.params.projectId);
    }
    
    // From Jay to address manually typing in an address and having project load
    // componentDidUpdate(prevProps) {
    //     if (prevProps.match.params.productId !== this.props.match.params.productId) {
    //         this.props.requestProduct(this.props.match.params.productId);
    //     }
    // }

    render() {
        if (!this.props.project || !this.props.messages) return null;
        let project = this.props.project;
        let messages = this.props.messages;

        return (
            <div className="panel panel--perma panel--project push_double--bottom centered">
                <header className="project-header centered">
                    <h1 className="project-header_name">{project.name}</h1>
                    <h4 className="project-header_description normal">{project.description}</h4>
                </header>
                <section className="project-dock centered">
                    <div className="card-grid">
                        <MessageboardCard project={project} messages={messages} />
                        <TodolistCard project={project} />
                    </div>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        projectId: ownProps.match.params.projectId,
        project: state.entities.projects[ownProps.match.params.projectId],
        messages: Object.values(state.entities.messages)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchMessages: (projectId) => dispatch(fetchMessages(projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectShow);
