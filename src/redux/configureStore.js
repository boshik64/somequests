import { createStore, combineReducers } from 'redux';

import { chatsReducer } from './reducers/chatsReducer/chatsReducers';
import { messageReducer } from './reducers/messageReducer/messageReducer';



export const store = createStore(combineReducers({
    chats: chatsReducer,
    messages: messageReducer
}));