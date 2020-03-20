import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TrixEditor } from 'react-trix';

import { fetchProject } from '../../actions/project_actions';
import { fetchMessage } from '../../actions/message_actions';
import { fetchComments, createComment } from '../../actions/comment_actions';
import CommentCard from './comment_card';

class MessageShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            message_id: '',
            owner_id: '',
            author_name: '',
            showTrixEditor: false
        }
        this.showTrixEditor = this.showTrixEditor.bind(this);
        this.hideTrixEditor = this.hideTrixEditor.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditorReady = this.handleEditorReady.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchMessage(this.props.match.params.projectId, this.props.match.params.messageId);
        this.props.fetchComments(this.props.match.params.messageId)
        this.setState({
            message_id: this.props.messageId,
            owner_id: this.props.userId,
            author_name: this.props.author.name
        });
    }

    showTrixEditor(e) {
        e.preventDefault();
        this.setState({ showTrixEditor: true });
    }

    hideTrixEditor(e) {
        this.setState({ body: '' });
        this.setState({ showTrixEditor: false });
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const comment = Object.assign({}, this.state);
        delete comment.showTrixEditor;
        this.props.processForm(this.props.messageId, comment);
        this.hideTrixEditor();
        // .then(
        //     this.props.history.push(`/projects/${this.props.projectId}/messages/${this.props.messageId}`)
        // )
    }

    handleEditorReady(e) {
        this.setState({
            body: e
        });
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
        let name = this.props.message.author_name;

        let d = new Date(this.props.message.created_at).toString()
        let date = d.split(' ')
        return (
            <main>
                <nav className="apps-project centered">
                    <Link to={`/projects/${project.id}`}>
                        <img className="lego_brick" src={window.lego_brick} />
                        <h3 className="layer-out_project">{project.name}</h3>
                    </Link>
                    <Link to={`/projects/${project.id}/messages`}>
                        <h3 className="layer-out_project">> Message Board</h3>
                    </Link>
                </nav>

                <div className="panel panel--perma panel--padding">
                    <article>
                        <h1 className="message-top flush--top push_quarter--bottom">{message.title}</h1>
                        <div className="message_attribution">
                            {
                                name === "Forestman2" &&
                                <img className="" src={window.forestman_avatar} />
                            }
                            {
                                name === "Blacktron" &&
                                <img className="" src={window.blacktron_avatar} />
                            }
                            {
                                name === "Minifig" &&
                                <img className="" src={window.demo_avatar} />
                            }
                            <div className="message-meta">
                                {message.author_name}
                                <br />
                                {date[1]} {date[2]} •                            
                            </div>
                        </div>
                        <section className="formatted_content push--ends">{ReactHtmlParser(message.body)}</section>
                    </article>
<div></div>
                    <h2 className="break--thick :before break :before">
                        <span>Comments</span>
                    </h2>

                    <section className="comments">
                        <div>
                            <ul className="comment-cards">
                                {this.props.comments.map((comment) => (
                                    <li key={comment.id}>
                                        <CommentCard
                                            comment={comment}
                                        />
                                    </li>
                                ))}
                            </ul>

                        </div>
                        { this.state.showTrixEditor
                            ? (
                                <div className="expanded_content">
                                <form onSubmit={this.handleSubmit} className="">
                                    <article className="flush--bottom">
                                        <section className="message-content">
                                            <TrixEditor
                                                placeholder="Type your comment here..."
                                                onChange={this.handleEditorReady}
                                            />
                                        </section>
                                    </article>
                                    <footer className="new-message-footer message-body">
                                        <div className="new-message-buttons push--bottom">
                                            <input
                                                className="btn btn--primary"
                                                type="submit"
                                                value="Add this comment"
                                            />
                                        </div>
                                    </footer>
                                </form>
                                </div>)
                            : (
                                <div className="collapsed_content">
                                    <button 
                                        className="comment_field prompt" 
                                        type="button"
                                        onClick={this.showTrixEditor}
                                    >
                                        Add a comment...
                                    </button>
                                </div>)
                        }
                    </section>

                </div>
            </main>
        )

    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    console.log(ownProps)
    return {
        userId: state.session.id,
        author: state.entities.users[state.session.id],
        errors: state.errors.session,
        messageId: ownProps.match.params.messageId,
        message: state.entities.messages[ownProps.match.params.messageId],
        projectId: ownProps.match.params.projectId,
        project: state.entities.projects[ownProps.match.params.projectId],
        comments: Object.values(state.entities.comments)
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchMessage: (projectId, messageId) => dispatch(fetchMessage(projectId, messageId)),
        fetchComments: (messageId) => dispatch(fetchComments(messageId)),
        processForm: (messageId, comment) => dispatch(createComment(messageId, comment))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageShow);