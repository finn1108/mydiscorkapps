import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import './App.css';


import { RegisterPage } from './pages/RegisterPage';
import { Dashboard } from './pages/Dashboard';
import { Login } from './pages/auth/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route path="/" element={<Navigate replace to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
