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

export const fetchMessages = (projectId) => dispatch => (
    APIUtil.fetchMessages(projectId).then(messages => (
        dispatch(receiveMessages(messages))
    ))
);

export const fetchMessage = (projectId, messageId) => dispatch => (
    APIUtil.fetchMessage(projectId, messageId).then(message => (
        dispatch(receiveMessage(message))
    ))
);

export const createMessage = (projectId, message) => dispatch => (
    APIUtil.createMessage(projectId, message).then(message => (
        dispatch(receiveMessage(message))
    ))
);