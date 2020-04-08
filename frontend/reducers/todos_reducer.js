import { RECEIVE_TODO, RECEIVE_TODOS } from '../actions/todo_actions';

const todosReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_TODOS:
            // #Ayanote: creating nested object of todos under listId in todos in state
            Object.keys(action.todos).map(key => {
                const listId = action.todos[key].list_id;
                if (!nextState[listId]) {
                    nextState[listId] = {}
                } 
                nextState[listId] = Object.assign(nextState[listId], {[key]: action.todos[key]})
            });
            return nextState;
        case RECEIVE_TODO:
            nextState[action.todo.id] = action.todo
            return nextState;
        default:
            return state;
    }
}

export default todosReducer;