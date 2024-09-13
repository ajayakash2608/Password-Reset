import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Component/Login';
import ShortenerForm from './Component/ShortenerForm';
import Signup from './Component/SignUp';
import ResetPassword from './Component/ResetPassword';
import ForgotPassword from './Component/ForgotPassword';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Default route to redirect to login */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shortenerform" element={<ShortenerForm />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="//reset-password/:token" element={<ResetPassword />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
