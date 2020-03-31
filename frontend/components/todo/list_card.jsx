import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchTodos, createTodo } from '../../actions/todo_actions';

class ListCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            body: '',
            owner_id: '',
            list_id: '',
            due_date: '',
            done: false,
            showTodoForm: false
        }
        this.showTodoForm = this.showTodoForm.bind(this);
        this.hideTodoForm = this.hideTodoForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        console.log(this.props.list.id)
        this.props.fetchTodos(this.props.list.id);
        this.setState({
            list_id: this.props.list.id,
            owner_id: this.props.userId
        })
        console.log(this.props.todos)
    }

    showTodoForm(e) {
        e.preventDefault();
        this.setState({ showTodoForm: true });
    }

    hideTodoForm(e) {
        e.preventDefault();
        this.setState({ showTodoForm: false })
    }

    handleChange(e) {
        e.preventDefault();
        this.setState({ body: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state);
        delete todo.showTodoForm;
        this.props.processForm(this.props.list.id, todo);
        console.log(todo)
        this.hideTodoForm;
    }

    render() {
        let undoneTodos = [];
        let doneTodos = [];
        if (!this.props.list || !this.props.todos) return null;

        return (
            <article className="list-card">
                <Link to={{
                    pathname: `/lists/${this.props.list.id}/todos`,
                    list: this.props.list,
                }}
                className="list_link">
                    <header className="list_header">
                        <h3 className="list_title">{this.props.list.title}</h3>
                    </header>
                    <ul className="todos-undone">
                        {this.props.todos.map((todo) => (
                            <li key={todo.id}>
                                <div className="checkbox">
                                    <input type="checkbox" className="todo_done" />
                                    {todo.body}
                                </div>
                            </li>    
                        ))}
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
                                        onChange={this.handleChange}
                                    />
                                    <div>
                                        <input
                                            type="submit"
                                            className="btn btn--small btn--primary"
                                            value="Add this to-do"
                                        />
                                        <button
                                            type="reset"
                                            className="btn btn--small btn--secondary"
                                            onClick={this.hideTodoForm}
                                        >
                                        Cancel
                                        </button>
                                    </div>
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
    // console.log(ownProps)
    // console.log(state)
    return {
        errors: state.errors.session,
        userId: state.session.id,
        projectId: ownProps.projectId,
        list: ownProps.list,
        listId: ownProps.list.id,
        todos: Object.values(state.entities.todos),
        // list: state.entities.lists[ownProps.match.params.listId],
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: (listId) => dispatch(fetchTodos(listId)),
        processForm: (listId, todo) => dispatch(createTodo(listId, todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);