import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';
import axios from 'axios';

const RecruiterLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false); // To toggle between login and sign-up
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Make an API call to validate recruiter credentials
    axios.post('http://localhost:3001/validateRecruiterPassword', { username, password })
      .then((res) => {
        if (res.data.validation) {
          console.log('Login Successful');
          // Store user info in localStorage or state
          localStorage.setItem('recruiter', JSON.stringify({ username }));
          alert('Login Successful');
          navigate('/'); // Redirect to home page after successful login
        } else {
          alert('Invalid username or password');
        }
      })
      .catch((err) => {
        console.error('Login error:', err);
        alert('Something went wrong! Please try again later.');
      });
  };

  const handleSignUp = (e) => {
    e.preventDefault();

    // Make an API call to sign up the recruiter
    axios.post('http://localhost:3001/signUpRecruiter', { username, password })
      .then((res) => {
        if (res.data.success) {
          console.log('Sign Up Successful');
          // Store user info in localStorage or state
          localStorage.setItem('recruiter', JSON.stringify({ username }));
          alert('Sign Up Successful');
          navigate('/'); // Redirect to home page after successful sign up
        } else {
          alert('Error during sign-up');
        }
      })
      .catch((err) => {
        console.error('Sign-up error:', err);
        alert('Something went wrong during sign-up! Please try again later.');
      });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>{isSignUp ? 'Recruiter Sign Up' : 'Recruiter Login'}</h2>
        <form onSubmit={isSignUp ? handleSignUp : handleLogin} className="login-form">
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
          <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
        </form>

        <div className="toggle-signup">
          {isSignUp ? (
            <p>Already have an account? <span onClick={() => setIsSignUp(false)} className="toggle-link">Login here</span></p>
          ) : (
            <p>New recruiter? <span onClick={() => setIsSignUp(true)} className="toggle-link">Sign up here</span></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
