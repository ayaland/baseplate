import { RECEIVE_MESSAGE, RECEIVE_MESSAGES } from '../actions/message_actions';

const messagesReducer = (state = {}, action) => {
    Object.freeze(state) 
    switch(action.type) {
        case RECEIVE_MESSAGES:
            return action.messages;
        case RECEIVE_MESSAGE:
            const newMessage = { [action.message_id]: action.message };
            return Object.assign({}, state, newMessage);
        default:
            return state;

    }
}

export default messagesReducer;