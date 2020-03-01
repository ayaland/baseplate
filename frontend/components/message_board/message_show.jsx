import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TrixEditor } from 'react-trix';

import { fetchProject } from '../../actions/project_actions';
import { fetchAuthor, fetchMessage } from '../../actions/message_actions';

class MessageShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
        }
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
        this.props.fetchMessage(this.props.match.params.projectId, this.props.match.params.messageId)
        // this.props.fetchAuthor(this.props.location.message.owner_id)
        // const { st } = this.props.location.state
        // console.log(st)
    }

    showTrixEditor(e) {
        e.preventDefault();
    }

    hideTrixEditor(e) {

    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        if (!this.props.project || !this.props.message) return null;
        let project = this.props.project;
        let message = this.props.message;
        return (
            <main>
                <nav className="messages-project centered">
                    <Link to={`/projects/${project.id}`}>
                        <img className="lego_brick" src={window.lego_brick} />
                        <h3 className="layer-out_project">{project.name}</h3>
                    </Link>
                    <Link to={`/projects/${project.id}/messages`}>
                        <h3 className="layer-out_project">> Message Board</h3>
                    </Link>
                </nav>

                <div className="panel panel--perma panel--padding">
                    <h1 className="message-top flush--top push_quarter--bottom">{message.title}</h1>
                    <div className="message_attribution">{message.owner_id}</div>
                    <section className="formatted_content push--ends">{message.body}</section>

                    <div className="collapsed_content">
                        <button className="comment_field prompt" type="button">Add a comment or upload a file...</button>
                    </div>
                </div>
            </main>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        projectId: ownProps.match.params.projectId,
        messageId: ownProps.match.params.messageId,
        project: state.entities.projects[ownProps.match.params.projectId],
        message: state.entities.messages[ownProps.match.params.messageId],
        authorId: state.entities.messages[ownProps.match.params.messageId.owner_id]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchMessage: (projectId, messageId) => dispatch(fetchMessage(projectId, messageId)),
        fetchAuthor: (id) => dispatch(fetchAuthor(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageShow);