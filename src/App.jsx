import './App.css';
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './components/home';
import Profile from './components/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Layout from './Layout';
import NotFound from './components/NotFound';


function App() {

  return (
    <div>

      <Routes>
        <Route path={'/'} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Dialogs' element={<Dialogs />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>

    </div >
  )


}

export default App;
