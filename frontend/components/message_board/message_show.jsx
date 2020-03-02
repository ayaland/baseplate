import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TrixEditor } from 'react-trix';

import { fetchProject } from '../../actions/project_actions';
import { fetchMessage } from '../../actions/message_actions';

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
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditorReady = this.handleEditorReady.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
        this.props.fetchMessage(this.props.match.params.projectId, this.props.match.params.messageId)
    }

    showTrixEditor(e) {
        e.preventDefault();
        this.setState({ showTrixEditor: true})
        // this.setState({ showTrixEditor: true}, () => {
        //     document.addEventListener('click', this.hideTrixEditor);
        // })
    }

    // hideTrixEditor(e) {
    //     if (!this.trixEditor.contains(e.target)) {
    //         this.setState({ showTrixEditor: false}, () => {
    //             document.removeEventListener('click', this.hideTrixEditor);
    //         });
    //     }
    // }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = Object.assign({}, this.state);
        this.props.processForm(this.props.projectId, message).then(
            this.props.history.push(`/projects/${this.props.projectId}/messages/${this.props.messageId}`)
        )
    }

    handleEditorReady(e) {
        this.setState({
            body: e
        });
        console.log("editor");
        console.log(this.state.body);
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
                    <section className="formatted_content push--ends">{message.body}</section>

                    <h2 className="break--thick :before break :before">
                        <span>Comments</span>
                    </h2>
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
        authorId: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchMessage: (projectId, messageId) => dispatch(fetchMessage(projectId, messageId)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageShow);