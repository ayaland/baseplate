import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            return action.todos;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo
            return nextState;
        default:
            return state;
    }
}

export default todosReducer;