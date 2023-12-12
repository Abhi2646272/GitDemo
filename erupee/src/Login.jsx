// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Simulate authentication (replace with actual authentication logic)
    if (username === 'user' && password === 'password') {
      // onLogin(username);
      alert('valid credentials');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div style={{justifyContent:'center',alignItems:'center',marginLeft:'480px',width:'450px'}} ><form action="#" className="w-75 card bg-primary shadow-inset text-center border-light p-3">
        <div class="form-group mb-3">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
        <div class="form-group mb-3">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          </div>
        
        <button type="submit" class="btn btn-primary btn-block" onClick={handleLogin}>Submit</button>

        <p className='form-text text-muted'>
        Don't have an account? <Link to="/register" style={{ color: 'blue' }}>Register here</Link>.
      </p>
      </form></div>
  );
};

export default Login;
