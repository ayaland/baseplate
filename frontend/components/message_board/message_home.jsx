import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <main>
                <nav className="messages-project centered">
                    <img className="lego_brick" src={window.lego_brick} />
                    <h3 className="messages-project--name">{project.name}</h3>
                </nav>

                <div className="panel panel--perma panel--padding">
                    <article>
                        <header className="perma_header push--bottom">
                            <h1 className="perma_title">Message Board</h1>
                            <label className="perma_btn">
                                <Link to="" className="btn btn--small">+ New Message</Link>
                            </label>
                        </header>
                        {this.props.messages.map((message) => (
                            message.title
                        ))}
                    </article>
                </div>

            </main>
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
