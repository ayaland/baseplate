import React from 'react';
import { connect } from 'react-redux';

import { fetchTodo, fetchTodos, createTodo, updateTodo } from '../../actions/todo_actions';

class ListCard extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            body: '',
            owner_id: '',
            list_id: '',
            due_date: '',
            done: false,
            showTodoForm: false,
        }
        this.showTodoForm = this.showTodoForm.bind(this);
        this.hideTodoForm = this.hideTodoForm.bind(this);
        this.toggleTodo = this.toggleTodo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
        console.log(this.props.list.id)
        this.props.fetchTodos(this.props.listId).then(
            console.log(this.props.todos)
        );
        this.setState({
            list_id: this.props.list.id,
            owner_id: this.props.userId,
        });
        console.log(this.props)

        // this.props.fetchTodos(this.props.listId).then( () => (
        // ));
        // console.log(this.props.todos)
    }

    // componentWillReceiveProps(nextProps) {
    //     if(nextProps.todos!==this.props.todos) {
    //         console.log(this.props.listId);
    //         console.log(this.props.todos);
    //         console.log(nextProps.todos);
    //     }
    // }

    showTodoForm(e) {
        this.setState({ showTodoForm: true });
    }

    hideTodoForm(e) {
        this.setState({ showTodoForm: false });
    }

    toggleTodo(e) { 
        this.props.fetchTodo(this.props.listId, e);
        console.log('request sent')
        // const updatedTodo = Object.assign({}, this.props.todo);
        // console.log(updatedTodo)
        // updatedTodo.done ? (
        //     updatedTodo.done = false
        // )
        // : (
        //     updatedTodo.done = true
        // )
        // console.log(updatedTodo.done)
        // this.props.updateTodo(this.props.list.id, this.props.todo.id, updatedTodo)
        // set current todo.done to whatever it is not. bonus if strikethrough
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
        this.hideTodoForm(e);
    }

    render() {
        if (!this.props.list || !this.props.todos) return null;
        let list = this.props.list;
        let todos = this.props.todos;

        let undoneTodos = [];
        let doneTodos = [];

        todos.forEach(todo => {
            if (todo.list_id === this.props.listId) {
                if (todo.done) {
                    doneTodos.push(todo);
                } else {
                    undoneTodos.push(todo);
                }
            }
        })

        return (
            <article className="list-card">
                <header className="list_header">
                    <h2 className="list_title">{list.title}</h2>
                </header>
                <ul className="todos-undone">
                    {undoneTodos.map((todo) => (
                        <li key={todo.id}>
                            <div className="checkbox">
                                <input 
                                    type="checkbox" 
                                    id="todo-check"
                                    className="todo_done"
                                    value={todo.id}
                                    onClick={e => this.toggleTodo(todo.id)}
                                />
                                <label htmlFor="todo_body">
                                    {' '}{todo.list_id}{' '}{todo.body}
                                </label>
                            </div>
                        </li>    
                    ))}
                </ul>
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
    return {
        errors: state.errors.session,
        userId: state.session.id,
        projectId: ownProps.projectId,
        list: ownProps.list,
        listId: ownProps.list.id,
        // todos: Object.values(state.entities.todos),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodo: (listId, todoId) => dispatch(fetchTodo(listId, todoId)),
        fetchTodos: (listId) => dispatch(fetchTodos(listId)),
        updateTodo: (listId, todoId, todo) => dispatch(updateTodo(listId, todoId, todo)),
        processForm: (listId, todo) => dispatch(createTodo(listId, todo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCard);