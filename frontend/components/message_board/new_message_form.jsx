import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import trix from 'trix';

import { fetchProject } from '../../actions/project_actions';
import { createMessage } from '../../actions/message_actions'

class NewMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
            project_id: '',
            owner_id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount () {
        this.props.fetchProject(this.props.match.params.projectId)
        this.setState({
            owner_id: this.props.sessionId,
            project_id: this.props.projectId
        })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = Object.assign({}, this.state);
        this.props.processForm(message).then(
            this.props.history.push(`/projects/${this.props.projectId}/messages`)
        )
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

    render () {
        if (!this.props.project) return null;
        let project = this.props.project
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
                    <form onSubmit={this.handleSubmit} className="">
                        <article className="flush--bottom">
                                <textarea rows="1" placeholder="Type a title..." autoFocus="autoFocus" className="input title" />

                            <section className="message-content">
                            <trix-toolbar id="baseplate_toolbar" class="message-body">
                                <div className="trix-button-row">
                                    {/* <span className="trix-button-group trix-button-group--text-tools" />
                                    <span className="trix-button-group trix-button-group--block-tools" />    */}
                                </div>
                            </trix-toolbar>
                            <trix-editor 
                                className="formatted_content flush--bottom"
                                input="message_body" 
                                toolbar="baseplate_toolbar"
                                placeholder="Write away..."
                            ></trix-editor>
                            
                            </section>
                        </article>
                        <footer className="new-message-footer message-body">
                            <div className="new-message-buttons push--bottom">
                                <input 
                                    className="btn btn--primary"
                                    type="submit"
                                    value="Save as a draft"
                                />
                                <input 
                                    className="btn btn--secondary"
                                    type="submit"
                                    value="Post this message"
                                />
                            </div>

                        </footer>
                    </form>
                </div>
            </main>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps.match.params.projectId)
    return {
        errors: state.errors.session,
        sessionId: state.session.id,
        projectId: ownProps.match.params.projectId,
        project: state.entities.projects[ownProps.match.params.projectId]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        processForm: (message) => dispatch(createMessage(message))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewMessageForm));