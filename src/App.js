import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/user/Dashboard';
import './App.css';

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>            
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;