import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { ADD_MESSAGES, DELETE_MESSAGES } from '../redux/actions/actionTypes';
import { messageSelector } from '../redux/reducers/messageReducer/selector';

const Messages = () => {
    const { chatId } = useParams();
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    const chatsMessage = useSelector(messageSelector);

    const message = chatsMessage.filter((message) => {
        if (!chatId) return true;

        return message.chatId === Number(chatId)
    })

    const addMessage = () => {


        const obj = {
            id: Math.random(),
            chatId: chatId,
            title: title
        }
        dispatch({ type: ADD_MESSAGES, payload: obj })
    }



    const deleteMessage = (id) => {
        dispatch({ type: DELETE_MESSAGES, payload: id, meta: { delay: 3000 } })

    }


    return (
        <div>
            <input value={title} onChange={(e) => setTitle(e.target.value)} />
            <button onClick={addMessage}>Add</button>
            {message.map((item) => (
                <div key={item.id}>
                    <div>{item.title}</div>
                    <div><button onClick={() => deleteMessage(item.id)}>x</button></div>
                </div>
            ))}
        </div>);
}

export default Messages;