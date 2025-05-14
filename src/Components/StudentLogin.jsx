import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Step 1: Import useNavigate
import '../Styles/Login.css';
import axios from 'axios';

const StudentLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Step 2: Initialize it

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/validatePassword', { username, password })
      .then(res => {
        if (res.data.validation) {
          alert("Login Successful");
          console.log("Login Successful");
          navigate('/'); // Step 3: Navigate on success
        } else {
          alert("Invalid username or password");
          console.log("Invalid username or password");
        }
      })
      .catch(err => {
        console.error("Login error:", err);
        alert("Something went wrong!");
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Student Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;