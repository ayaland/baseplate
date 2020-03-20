import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchProject } from '../../actions/project_actions';
import { fetchMessages } from '../../actions/message_actions';
import MessageCard from './message_card';

class MessageIndex extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchMessages(this.props.match.params.projectId);
    }

    render () {
        if (!this.props.project) return null;
        let project = this.props.project;
        let messages = this.props.messages.reverse();
        return (
            <main>
                <nav className="apps-project centered">
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
                                <Link 
                                    to={`messages/new`} 
                                    project={project} 
                                    className="btn btn--small btn--primary"
                                >+ New Message</Link>
                            </label>

                        </header>
                        <section className="message-board message-stack push--top">
                            <table className="messages-table">     
                                <tbody>
                                    <ul className="messages-list">
                                        {messages.map((message) => (
                                                <li key={message.id}>
                                                    <MessageCard 
                                                        message={message} 
                                                        projectId={project.id} 
                                                        project={project} 
                                                        key={message.id} 
                                                        />
                                                </li>
                                        ))}
                                    </ul>
                                </tbody>
                            </table>
                        </section>
                    </article>
                </div>

            </main>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        project: state.entities.projects[ownProps.match.params.projectId],
        messages: Object.values(state.entities.messages)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchMessages: (projectId) => dispatch(fetchMessages(projectId)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageIndex));
