


const initialState = {
    chats: [
        {
            chatId: 1,
            name: 'Vlad'
        },
        {
            chatId: 2,
            name: 'Dima'
        },
        {
            chatId: 3,
            name: 'Marina'
        },
        {
            chatId: 4,
            name: 'Kolya'
        },
    ]
}

export const chatsReducer = (state = initialState, action) => {
    switch (action.type) {




        default:
            return state
    }
}