import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';


function App() {


  return (

    <Routes>

      <Route path={'/'} element={<Home />} />
      <Route path={'/register'} element={<Register />} />
      <Route path={'/login'} element={<Login />} />

    </Routes>
  )


}

export default App;
