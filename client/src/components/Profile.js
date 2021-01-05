import React from 'react';

import Sidebar from './Sidebar';
import UserInfo from './UserInfo';
import './css/Profile.css';
import TopArtists from './TopArtists';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Profile() {
  return (
    <Router>
      <div className="mainPage__wrapper">
        <Sidebar />
        <Switch>
          <Route path="/" exact component={UserInfo} />
          <Route path="/artists" component={TopArtists} />
        </Switch>
      </div>
    </Router>
  );
}

export default Profile;
