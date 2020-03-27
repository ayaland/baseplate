import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchProject } from '../../actions/project_actions';
import { fetchList, createTodo } from '../../actions/todo_actions';

class ListShow extends React.Component {
    componentDidMount() {
        this.props.fetchProject(this.props.match.params.projectId);
        this.props.fetchList(this.props.match.params.listId);
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
        if (!this.props.project || !this.props.list) return null;
        let project = this.props.project;
        let list = this.props.list;
        return (
            <main>
                <nav className="apps-project centered">
                    <Link to={`/projects/${project.id}`}>
                        <img className="lego_brick" src={window.lego_brick} />
                        <h3 className="layer-out_project">{project.name}</h3>
                    </Link>
                    <Link to={`/projects/${project.id}/lists`}>
                        <h3 className="layer-out_project">> To-dos</h3>
                    </Link>
                </nav>

                <div className="panel panel--perma panel--padding">
                    <article>
                        <h3 className="list_title">
                            {list.title}
                            <div className="list-progress">

                            </div>
                        </h3>
                    </article>
                </div>
            </main>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        projectId: ownProps.match.params.projectId,
        project: state.entities.projects[ownProps.match.params.projectId],
        list: state.entities.lists[ownProps.match.params.listId]
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProject: (projectId) => dispatch(fetchProject(projectId)),
        fetchList: (listId) => dispatch(fetchList(listId)),
        processForm: (listId, todo) => dispatch(createTodo(listId, todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListShow);