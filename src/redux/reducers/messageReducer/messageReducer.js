
import { DELETE_MESSAGES } from "../../actions/actionTypes";
import { ADD_MESSAGES } from "../../actions/actionTypes";


const initialState = {
    messages: [
        {
            id: 1,
            chatId: 1,
            title: 'Where are you?'
        },
        {
            id: 2,
            chatId: 2,
            title: 'Lorem ipsum'
        },
        {
            id: 3,
            chatId: 2,
            title: 'Wow!!!'
        },
        {
            id: 4,
            chatId: 4,
            title: 'qweerty'
        },
        {
            id: 5,
            chatId: 3,
            title: 'asdw'
        },
        {
            id: 6,
            chatId: 2,
            title: 'or wasd&&&'
        },
        {
            id: 7,
            chatId: 4,
            title: 'Where are you, bro?'
        },
    ]
}



export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_MESSAGES:
            return {
                ...state,
                messages: state.messages.filter(item => item.id !== action.payload)
            }
        case ADD_MESSAGES:
            return {
                ...state,
                messages: [...state.messages, action.payload]
            }
        default:
            return state
    }
}