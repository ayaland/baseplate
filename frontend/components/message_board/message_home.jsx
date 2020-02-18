import React from 'react';
import { connect } from 'react-redux';

import { fetchMessages } from '../../actions/message_actions';

class MessageHome extends React.Component {
    componentDidMount() {
        this.props.fetchMessages(this.props.match.params.projectId)
    }

    render () {
        return (
            <nav className="message-project centered">
                Project Name
            </nav>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchMessages: (projectId) => dispatch(fetchMessages(projectId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageHome);
