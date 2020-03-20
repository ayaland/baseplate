import { RECEIVE_LIST, RECEIVE_LISTS } from '../actions/todo_actions';

const listsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_LISTS:
            // return Object.assign({}, state, action.lists);
            return action.lists;
        case RECEIVE_LIST:
            // const newMessage = { [action.list_id]: action.list };
            // return Object.assign({}, state, newMessage);
            nextState[action.list.id] = action.list
            return nextState;
        default:
            return state;
    }
}

export default listsReducer;