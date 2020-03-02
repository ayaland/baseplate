// export const fetchComment = (projectId, messageId) => (
//     $.ajax({
//         method: 'GET',
//         url: `/api/projects/${projectId}/messages/${messageId}`,
//     })
// );

export const fetchComments = (messageId) => (
    $.ajax({
        method: 'GET',
        url: `/api/projects/${projectId}/messages/${messageId}`
    })
);

export const createComment = (messageId, comment) => (
    $.ajax({
        method: 'POST',
        url: `/api/projects/${projectId}/messages/${messageId}`,
        data: { comment }
    })
);

export const deleteComment = (messageId, commentId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${projectId}/messages/${messageId}/${commentId}`
    })
);