import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMessages } from '../../actions/message_actions';
import { fetchProject } from '../../actions/project_actions';
import MessageCard from './message_card';

class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId),
        this.props.fetchMessages(this.props.match.params.projectId)
    }

    render () {
        if (!this.props.project) return null;
        let project = this.props.project;
        return (
            <main>
                <nav className="messages-project centered">
                    <Link to={`/projects/${project.id}`}>
                        <img className="lego_brick" src={window.lego_brick} />
                        <h3 className="layer-out_project">{project.name}</h3>
                    </Link>
                </nav>

                <div className="panel panel--perma panel--padding">
                    <article>
                        <header className="perma_header push--bottom">
                            <h1 className="perma_title">Message Board</h1>

                            <label className="perma_btn">
                                <Link to={`messages/new`} project={this.props.project} className="btn btn--small">+ New Message</Link>
                            </label>

                        </header>
                        <section className="message-board push--top">
                            {this.props.messages.map((message) => (
                                <MessageCard message={message} key={message.id} />
                            ))}

                        </section>
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

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);
