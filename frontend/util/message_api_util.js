export const fetchMessage = (projectId, messageId) => (
    $.ajax({
        method: 'GET',
        url: `/api/projects/${projectId}/messages/${messageId}`,
    })
);

export const fetchMessages = (projectId) => (
    $.ajax({
        method: 'GET',
        url: `/api/projects/${projectId}/messages`
    })
);

export const fetchAuthor = (id) => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${id}`,
        data: { id }
    })
);

export const createMessage = (projectId, message) => (
    $.ajax({
        method: 'POST',
        url: `/api/projects/${projectId}/messages`,
        data: { message }
    })
);

export const deleteMessage = (projectId, messageId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${projectId}/messages/${messageId}`
    })
);