import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Step 1: import this
import '../Styles/Login.css';
import axios from 'axios';

const RecruiterLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Step 2: initialize navigate

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3001/validateRecruiterPassword', { username, password })
      .then(res => {
        if (res.data.validation) {
          console.log("Login Successful");
          navigate('/home'); // Step 3: redirect to home
        } else {
          alert("Invalid username or password");
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
        <h2>Recruiter Login</h2>
        <form onSubmit={handleLogin} className="login-form">
          <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default RecruiterLogin;
