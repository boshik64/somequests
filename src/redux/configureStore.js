import { applyMiddleware, createStore, combineReducers } from 'redux';

import { chatsReducer } from './reducers/chatsReducer/chatsReducers';
import { messageReducer } from './reducers/messageReducer/messageReducer';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';


const logger = store => next => action => {
    console.log('dispatching', action);
    console.log('before', store.getState());

    let result = next(action)

    console.log('after', store.getState());
    

    return result
}
const time = store => next => action => {
    const delay = action?.meta?.delay;
    if (!delay) {
        return next(action)
    }


    const timeOut = setTimeout(() => next(action), delay)


    return () => {
        clearTimeout(timeOut)
    }
}

const persistConfig = {
    key: 'root',
    storage
}


const rootReducer = combineReducers({
    chats: chatsReducer,
    messages: messageReducer
});


const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, applyMiddleware(logger, time))

export const persist = persistStore(store)