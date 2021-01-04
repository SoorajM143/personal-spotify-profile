import React, { useState } from 'react';

import { Link } from '@reach/router';

import './css/Sidebar.css';
import { FaSpotify } from 'react-icons/fa';
import PersonIcon from '@material-ui/icons/Person';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import HistoryIcon from '@material-ui/icons/History';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

function SideBar() {
  const [activeTab1, setActiveTab1] = useState(true);
  const [activeTab2, setActiveTab2] = useState(false);
  const [activeTab3, setActiveTab3] = useState(false);
  const [activeTab4, setActiveTab4] = useState(false);
  const [activeTab5, setActiveTab5] = useState(false);

  const onClick = () => {};
  return (
    <nav className="sideBar__wrapper">
      <FaSpotify className="sidebar__logo" />
      <ul className="sidebar__menu">
        <li className="sidebar__items">
          <a href="" className={activeTab1 ? 'active' : ''}>
            <PersonIcon />
            <h4>Profile</h4>
          </a>
        </li>
        <li className="sidebar__items">
          <a className="">
            <RecordVoiceOverIcon />
            <h4>Artists</h4>
          </a>
        </li>
        <li className="sidebar__items">
          <a className="">
            <AudiotrackIcon />
            <h4>Tracks</h4>
          </a>
        </li>
        <li className="sidebar__items">
          <a className="">
            <HistoryIcon />
            <h4>Recent</h4>
          </a>
        </li>
        <li className="sidebar__items">
          <a className="">
            <QueueMusicIcon />
            <h4>Playlists</h4>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
