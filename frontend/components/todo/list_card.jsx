import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTodos } from '../../actions/todo_actions';

class ListCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            body: '',
            list_id: '',
            owner_id: '',
            showTodoForm: false
        }
        this.showTodoForm = this.showTodoForm.bind(this);
        this.hideTodoForm = this.hideTodoForm.bind(this);
    }

    componentDidMount () {
        this.props.fetchTodos(this.props.list.id);
        this.setState({
            list_id: this.props.list.id,
            owner_id: this.props.userId
        })
    }

    showTodoForm(e) {
        e.preventDefault();
        this.setState({ showTodoForm: true });
    }

    hideTodoForm(e) {
        e.preventDefault();
        this.setState({ showTodoForm: false })
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
                        <li>
                        {/* {this.props.todos.map((todo) => (
                            <div className="checkbox">
                                <input type="checkbox" className="todo_done" />
                            </div>
                            <div>{todo}</div>
                        ))} */}
                        </li>    
                    </ul>
                </Link>
                    { this.state.showTodoForm
                        ? (
                            <div className="todos-form todos-form--todo checkbox">
                                <form onSubmit={this.handleSubmit}>
                                    <label className="checkbox_label">
                                        <span className="checkbox_button"></span>
                                    </label>
                                    <textarea
                                        rows="1"
                                        placeholder="Describe this to-do..."
                                        className="todos-form_title input input--full-width input--borderless input--unpadded"
                                    
                                    />
                                    {/* #Ayanote: if want to add notes field later
                                    <div className="todos-form_field">
                                        <label 
                                            htmlFor="todo_expand_notes_field" 
                                            className="todos-form_field-label"
                                        >
                                        Notes
                                        </label>
                                        <input type="text" placeholder="Add extra details...">
                                        </input>

                                    </div> */}
                                </form>
                            </div>
                        )
                        : (
                            <div className="todolist-actions push_quarter--top push_half--bottom">
                                <button 
                                    className="btn btn--small" 
                                    type="button"
                                    onClick={this.showTodoForm}
                                >
                                Add a to-do</button>
                            </div>
                        )
                    }
            </article>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        errors: state.errors.session,
        userId: state.session.id,
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