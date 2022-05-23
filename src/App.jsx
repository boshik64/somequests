import './App.css';
import React, { useState } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';



function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: 'increase' })
  }
  const decrease = () => {
    dispatch({ type: 'decrease' })
  }


  return (
    <div>
      <div>
        <button onClick={decrease}>-</button>
      </div>
      {count}
      <div>
        <button onClick={increase}>+</button>
      </div>
    </div >
  )


}

export default App;
