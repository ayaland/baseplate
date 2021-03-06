import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state) 
    let nextState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_MESSAGES:
            // return Object.assign({}, state, action.messages);
            return action.messages;
        case RECEIVE_MESSAGE:
            // const newMessage = { [action.message_id]: action.message };
            // return Object.assign({}, state, newMessage);
            nextState[action.message.id] = action.message
            return nextState;
        default:
            return state;
    }
}

export default messagesReducer;