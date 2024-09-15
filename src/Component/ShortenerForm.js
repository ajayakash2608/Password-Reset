import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ShortenForm = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleShorten = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/shorten-url',
        { originalUrl },
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      setShortenedUrl(response.data.shortenedUrl);
    } catch (err) {
      setError(err.response?.data?.error || 'Error shortening URL');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className="container">
      <form onSubmit={handleShorten}>
        <input 
          type="text"
          placeholder="Enter the original URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
        <button type="submit">Shorten URL</button>
      </form>
      {shortenedUrl && <p>Shortened URL: {shortenedUrl}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ShortenForm;
