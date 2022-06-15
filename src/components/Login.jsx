import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginInitiate } from '../redux/actions/actions';
import { userSelector } from '../redux/reducer/selectors';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            return
        }
        dispatch(loginInitiate(email, password))
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='email' type="text" onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='password' type="text" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit">SIGN IN</button>
            </form>

        </div>
    );
}

export default Login;