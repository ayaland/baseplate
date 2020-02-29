import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import Trix from 'trix';
import { TrixEditor } from 'react-trix';
import { fetchProject } from '../../actions/project_actions';
import { createMessage } from '../../actions/message_actions';

class NewMessageForm extends React.Component {
    constructor(props) {
        super(props);
        // this.trixInput = React.createRef();
        // console.log("trixinput created")
        // console.log(this.trixInput)
        this.state = {
            title: '',
            body: '',
            project_id: '',
            owner_id: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEditorReady = this.handleEditorReady.bind(this);
        // this.handleContentChange = this.handleContentChange.bind(this);
        // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId)
        this.setState({
            owner_id: this.props.sessionId,
            project_id: this.props.projectId
        })
        // window.onload = function () {
        //     this.trixInput.current.addEventListener("trix-change", event => {
        //         console.log("trix change event fired")
        //         this.handleContentChange(event.target.innerHTML);
        //     })
        // }
    }

    update(field) {
        console.log("update is called")
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const message = Object.assign({}, this.state);
        this.props.processForm(this.props.projectId, message).then(
            this.props.history.push(`/projects/${this.props.projectId}/messages`)
        )
    }

    // handleContentChange(content) {
    //     console.log("handlecontentchange")
    //     this.setState({body: content});
    // };

    handleEditorReady(e) {
        console.log("handle editor")
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
                                <textarea 
                                    rows="1" 
                                    placeholder="Type a title..." 
                                    autoFocus="autoFocus" 
                                    className="input title"
                                    value={this.state.title}
                                    onChange={this.update('title')} 
                                    />

                            <section className="message-content">
                                <TrixEditor 
                                    placeholder="Write away..."
                                    onChange={this.handleEditorReady}
                                />
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
        processForm: (projectId, message) => dispatch(createMessage(projectId, message))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NewMessageForm));

























