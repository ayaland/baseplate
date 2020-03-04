// export const fetchComment = (projectId, messageId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/projects/${projectId}/messages/${messageId}`,
//     })
// );

export const fetchComments = (messageId) => (
    $.ajax({
        method: 'GET',
        url: `/api/messages/${messageId}/comments`
    })
);

export const createComment = (messageId, comment) => (
    $.ajax({
        method: 'POST',
        url: `/api/messages/${messageId}/comments`,
        data: { comment }
    })
);

export const deleteComment = (messageId, commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/messages/${messageId}/comments/${commentId}`
    })
);