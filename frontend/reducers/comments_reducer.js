import { RECEIVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state)
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_COMMENTS:
            // return Object.assign({}, state, action.messages);
            return action.comments;
        case RECEIVE_COMMENT:
            // const newMessage = { [action.message_id]: action.message };
            // return Object.assign({}, state, newMessage);
            nextState[action.comment.id] = action.comment
            return nextState;
        default:
            return state;
    }
}

export default commentsReducer;