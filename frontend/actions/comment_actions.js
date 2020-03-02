import * as APIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

export const receiveComment = (comment) => ({
    type: RECEIVE_COMMENT,
    comment
});

export const receiveComments = (comments) => ({
    type: RECEIVE_COMMENTS,
    comments
});

// ---- THUNKS ----

export const fetchComments = (messageId) => dispatch => (
    APIUtil.fetchComments(messageId).then(comments => (
        dispatch(receiveComments(comments))
    ))
);

// export const fetchComment = (messageId, commentId) => dispatch => (
//     APIUtil.fetchComment(messageId, commentId).then(comment => (
//         dispatch(receiveComment(comment))
//     ))
// );

export const createComment = (messageId, comment) => dispatch => (
    APIUtil.createComment(messageId, comment).then(comment => (
        dispatch(receiveComment(comment))
    ))
);