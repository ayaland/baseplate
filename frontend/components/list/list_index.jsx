import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { fetchProject } from '../../actions/project_actions';
import { fetchLists } from '../../actions/todo_actions';

class ListIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            project_id: '',
            owner_id: '',
        }
    }

    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchLists(this.props.match.params.projectId);
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
                        <header className="perma_header push--bottom">
                            <h1 className="perma_title">To-dos</h1>

                            <label className="perma_btn">
                                <Link
                                    to={`lists/new`}
                                    project={project}
                                    className="btn btn--small btn--primary"
                                >+ New List</Link>
                            </label>

                        </header>
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
        project: state.entities.projects[ownProps.match.params.projectId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchLists: (projectId) => dispatch(fetchLists(projectId))
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListIndex))