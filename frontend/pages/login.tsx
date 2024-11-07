import React, { useState } from 'react';
import './css/loginstyle.css'; // Importing the CSS file for styling
import { useNavigate } from 'react-router-dom'; // For navigation within the app

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleLogin = () => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (password.length <= 6) {
      alert("Password must be longer than 6 characters.");
      return;
    }

    // Navigate to the home page after a successful login
    navigate('/');
  };

  return (
    <div className="container">
      <form className="form" id="loginForm" onSubmit={(e) => e.preventDefault()}>
        <span className="input-span">
          <label htmlFor="email" className="label">Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
        </span>
        <span className="input-span">
          <label htmlFor="password" className="label">Password</label>
          <input 
            type="password" 
            name="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </span>
        <button type="button" className="submit" id="loginButton" onClick={handleLogin}>
          Log in
        </button>
        <span className="span">
          Don't have an account? <a href="/register">Sign up</a>
        </span>
      </form>
      <button className="back-home" onClick={() => navigate('/')}>
        Back to Home
      </button>
    </div>
  );
};

export default Login;
