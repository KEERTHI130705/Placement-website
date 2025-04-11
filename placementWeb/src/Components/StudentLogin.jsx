import React, { useState } from 'react';
import '../Styles/Login.css';

const StudentLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Student Login:', { email, password });
    // Add API call or logic here
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <h2>Student Login</h2>
      <form onSubmit={handleLogin} className="login-form">
        <input type="email" placeholder="Student Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        <button type="submit">Login</button>
      </form>
    </div>
    </div>
  );
};

export default StudentLogin;
