import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutInitiate } from '../redux/actions/actions';
import { userSelector } from '../redux/reducer/selectors';



const Home = () => {

    const dispatch = useDispatch();
    const user = userSelector(userSelector);
    const navigate = useNavigate();

    const handleAuth = () => {
        if (user) {
            dispatch(logoutInitiate())
        }
        setTimeout(() => {
            navigate('/login')
        }, 1000)
    }



    return (
        <div>
            <h2>Home</h2>
            <button onClick={handleAuth}>Exit</button>

        </div>
    );
}

export default Home;