// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes ,Link} from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import Transfer from './Transfer';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

const App = () => {
   
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/transfer' element={<Transfer/>}/>
        </Routes>
       
    </Router>
  );
};

export default App;
