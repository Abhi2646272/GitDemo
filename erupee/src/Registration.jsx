// src/components/Registration.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Registration = ({ onRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Simulate user registration (replace with actual registration logic)
    onRegister(username, password);
  };

  return (
    <div>
      <h2>Registration</h2>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <Link to="/login" style={{color:'blue'}}>Login here</Link>.
      </p>
    </div>
  );
};

export default Registration;
