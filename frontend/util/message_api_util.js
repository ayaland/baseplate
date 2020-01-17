export const fetchMessages = (data) => (
    $.ajax({
        method: 'GET',
        url: '/api/messages',
        data
    })
)

export const createMessage = (message) => (
    $.ajax({
        method: 'POST',
        url: '/api/messages',
        data: { message }
    })
)