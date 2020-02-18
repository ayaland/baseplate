import React from 'react';
import { connect } from 'react-redux';

import { fetchMessages } from '../../actions/message_actions';
import { fetchProject } from '../../actions/project_actions';

class MessageHome extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId),
        this.props.fetchMessages(this.props.match.params.projectId)
    }

    render () {
        if (!this.props.project) return null;
        let project = this.props.project;
        let messages = this.props.messages;
        return (
            <nav className="message-project centered">
                <h1>{project.name}</h1>
            </nav>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        messages: Object.values(state.entities.messages)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchMessages: (projectId) => dispatch(fetchMessages(projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageHome);
