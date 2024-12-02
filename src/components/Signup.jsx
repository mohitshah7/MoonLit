import React, { useState } from 'react';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [dob, setDob] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here (e.g., form validation, API call, etc.)
    console.log('Signed up with:', email, username, dob, accountType);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input 
            type="email" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input 
            type="text" 
            id="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="dob">Date of Birth:</label>
          <input 
            type="date" 
            id="dob" 
            value={dob} 
            onChange={(e) => setDob(e.target.value)} 
            required 
          />
        </div>
        <div className="input-group">
          <label htmlFor="account-type">Account Type:</label>
          <select 
            id="account-type" 
            value={accountType} 
            onChange={(e) => setAccountType(e.target.value)} 
            required
          >
            <option value="">Select...</option>
            <option value="artist">Artist</option>
            <option value="videographer">Videographer</option>
            <option value="musician">Musician</option>
            <option value="writer">Writer</option>
            <option value="singer">Singer</option>
            <option value="photographer">Photographer</option>
          </select>
        </div>
        <button type="submit" className="btn">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
