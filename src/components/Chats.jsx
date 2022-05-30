import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { chatsSelector } from '../redux/reducers/chatsReducer/selector';

const Chats = () => {
    const chats = useSelector(chatsSelector)
    return (
        <div>

            {
                chats.map((chats) => (
                    <NavLink key={chats.chatId} to={`/message/${chats.chatId}`}>
                        {chats.name}
                    </NavLink>
                ))
            }

        </div>
    );
}

export default Chats;