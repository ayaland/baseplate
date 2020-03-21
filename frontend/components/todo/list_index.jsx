import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchProject } from '../../actions/project_actions';
import { fetchLists, createList } from '../../actions/todo_actions';

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            project_id: '',
            owner_id: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchLists(this.props.match.params.projectId);
        this.setState({
            owner_id: this.props.userId,
            project_id: this.props.projectId,
        });
    }

    update(field) {
        console.log(field)
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const list = Object.assign({}, this.state);
        console.log(list)
        this.props.processForm(this.props.projectId, list)
        // .then(
        //     this.props.history.push(`/projects/${this.props.projectId}/lists`)
        // );
    }
    
    render() {
        if (!this.props.project) return null;
        let project = this.props.project;
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
                        <header className="perma_header push_double--bottom">
                            <h1 className="perma_title">To-dos</h1>

                            <label className="perma_btn">
                                <Link
                                    to={`lists/new`}
                                    project={project}
                                    className="btn btn--small btn--primary"
                                >+ New List</Link>
                            </label>

                        </header>

                        <section className="new-list-form">
                            <form onSubmit={this.handleSubmit} className="">
                                <header className="todos-form_header">
                                    <h3 className="flush">
                                        <textarea
                                            rows="1"
                                            placeholder="Name this list..."
                                            autoFocus="autoFocus"
                                            className="input input--borderless input--unpadded list-title"
                                            maxLength="160"
                                            value={this.state.title}
                                            onChange={this.update('title')}
                                        />
                                    </h3>
                                </header>
                                <section className="todos-form_details">
                                    <div className="submit push--top push_half--bottom">
                                        <input 
                                            type="submit" 
                                            name="commit" 
                                            value="Add this list" 
                                            className="btn btn--small btn--primary" 
                                        />
                                        <button
                                            name="button"
                                            type="submit"
                                            className="btn btn--small btn--secondary todos-form_todolist-cancel">Cancel</button>

                                    </div>

                                </section>
                            </form>
                        </section>

                        <section className="lists list-stack push--top">
                            <table className="lists-table">
                                <tbody>
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
        errors: state.errors.session,
        userId: state.session.id,
        projectId: ownProps.match.params.projectId,
        project: state.entities.projects[ownProps.match.params.projectId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchLists: (projectId) => dispatch(fetchLists(projectId)),
        processForm: (projectId, list) => dispatch(createList(projectId, list)),
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex))