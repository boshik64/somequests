import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { registerInitiate } from '../redux/actions/actions';
import { userSelector } from '../redux/reducer/selectors';


const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [displayName, setDisplayName] = useState('');
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
        if (password !== passwordConfirm) {
            return;
        }
        dispatch(registerInitiate(email, password, displayName))
    }


    return (
        <div>
            <header style={{ width: '100%', heqight: 70 }}>
                <NavLink style={{ fontSize: 30, textDecoration: 'none', color: 'white' }} to={'/login'}>
                    Войти
                </NavLink>
            </header>
            <h2 style={{ marginTop: 20 }}>Register</h2>
            <form onSubmit={handleSubmit}>
                <input placeholder='Name' type="text" value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                <input placeholder='eMail' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input placeholder='Password' type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input placeholder='One more time password =)' type="text" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
                <button type='submit'>SIGN UP</button>
            </form>



        </div >
    );
}

export default Register;