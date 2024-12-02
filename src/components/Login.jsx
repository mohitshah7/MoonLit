import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();  // Hook to navigate after login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login: Replace with actual authentication logic when backend is ready
    const mockEmail = 'user@example.com';
    const mockPassword = 'password123';

    if (email === mockEmail && password === mockPassword) {
      setIsLoggedIn(true);  // Simulate a successful login
      navigate('/home');  // Redirect to the home page
    } else {
      setError('Invalid email or password');  // Set error message
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input 
            type="password" 
            id="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your password" 
            required 
          />
        </div>
        <button type="submit" className="btn">Login</button>
        
        {/* Show error message if login fails */}
        {error && <p className="error-message">{error}</p>}
        
        <p className="signup-message">
          If not signed in, <a href="/signup">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
