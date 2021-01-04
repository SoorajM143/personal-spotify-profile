import React from 'react';

import './css/Login.css';
import { FaSpotify } from 'react-icons/fa';

function Login() {
  return (
    <div className="login__page">
      <div className="login_logo">
        <FaSpotify className="logo" />
        <h2>Profile</h2>
      </div>
      <a href="http://localhost:8888/login" className="login__button">
        LOG IN TO SPOTIFY
      </a>
    </div>
  );
}

export default Login;
