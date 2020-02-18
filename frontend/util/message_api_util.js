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

export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: '/api/messages',
        data: { message }
    })
);

export const deleteMessage = (projectId, messageId) => (
    $.ajax({
        method: 'DELETE',
        url: `/api/projects/${projectId}/messages/${messageId}`
    })
)