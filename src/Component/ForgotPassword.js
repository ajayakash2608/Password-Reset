// src/ForgotPassword.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/forgot-password', { email });
      alert('Password reset link has been sent to your email');
      setMessage('Password reset link has been sent to your email');
    } catch (err) {
      setMessage(err.response.data.error || 'Something went wrong');
    }
  };

  const handleHome = () => {
    navigate('/login'); // Redirects to the login page
  };

  return (
    <div className="form-container">
      <h2>Forgot Password</h2>
      {message && <p className="error">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" value={email} onChange={handleChange} required />
        </label>
        <button type="submit">Send Reset Link</button>
      </form>
      <button className="home-button" onClick={handleHome}>Home</button>
    </div>
  );
}

export default ForgotPassword;
