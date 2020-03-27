import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTodos } from '../../actions/todo_actions';

class ListCard extends React.Component {
    constructor (props) {
        super(props);
    }

    componentDidMount () {
        this.props.fetchTodos(this.props.list.id);
    }

    render() {
        let undoneTodos = [];
        let doneTodos = [];

        return (
            <article className="list-card">
                <Link to={{
                    pathname: `/lists/${this.props.list.id}`,
                    project: this.props.project,
                    list: this.props.list,
                }}
                className="list_link">
                    <header className="list_header">
                        <h3 className="list_title">{this.props.list.title}</h3>
                    </header>
                    <ul className="todos-undone">
                        {/* {this.props.todos.map((todo) => (
                            <div>{todo}</div>
                        ))} */}
                        <li>
                            <div className="checkbox">
                                <input type="checkbox" className="todo_done" />
                            </div>
                        </li>    
                    </ul>
                </Link>
            </article>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        projectId: ownProps.projectId,
        list: ownProps.list,
        // list: state.entities.lists[ownProps.match.params.listId],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: (listId) => dispatch(fetchTodos(listId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);