import React from 'react';

import Sidebar from './Sidebar';
import UserInfo from './UserInfo';
import './css/Profile.css';

function Profile() {
  return (
    <div className="mainPage__wrapper">
      <Sidebar />
      <UserInfo />
    </div>
  );
}

export default Profile;
