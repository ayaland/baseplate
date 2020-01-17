import * as APIUtil from '../util/message_api_util';

export const RECEIVE_MESSAGES = 'RECEIVE_MESSAGES';
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE';

export const receiveMessage = (message) => ({
    type: RECEIVE_MESSAGE,
    message
});

export const receiveMessages = (messages) => ({
    type: RECEIVE_MESSAGES,
    messages
});


// ---- THUNKS ----

export const fetchMessages = () => dispatch => (
    APIUtil.fetchMessages().then(messages => (
        dispatch(receiveMessages(messages))
    ))
);

export const fetchMessage = () => dispatch => (
    APIUtil.fetchMessage(id).then(message => (
        dispatch(receiveMessage(message))
    ))
);

export const createMessage = (message) => dispatch => (
    APIUtil.createMessage(message).then(message => (
        dispatch(receiveMessage(message))
    ))
);