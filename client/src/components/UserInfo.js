import React, { Component } from 'react';

import { getUserInfo } from '../spotify';
import SongRow from './SongRow';
import './css/UserInfo.css';
import { logout } from '../spotify';
import { Avatar } from '@material-ui/core';

import { catchErrors } from '../utils';

class UserInfo extends Component {
  state = {
    user: null,
    followedArtists: null,
    playlists: null,
    topArtists: null,
    topTracks: null,
  };

  componentDidMount() {
    catchErrors(this.getData());
  }

  async getData() {
    const {
      user,
      followedArtists,
      playlists,
      topArtists,
      topTracks,
    } = await getUserInfo();
    this.setState({
      user,
      followedArtists,
      playlists,
      topArtists,
      topTracks,
    });
  }

  render() {
    const {
      user,
      followedArtists,
      playlists,
      topArtists,
      topTracks,
    } = this.state;
    const totalPlaylists = playlists ? playlists.total : 0;
    return (
      <div>
        <main className="main__tab">
          <header className="main__header">
            <div className="main__avatar">
              <img src={user?.images[0].url} alt={user?.display_name} />
            </div>
            <h1>{user?.display_name}</h1>
            <div className="user__Details">
              <div className="details_col">
                <p className="details_total">{user?.followers.total}</p>
                <p className="details_prop">Followers</p>
              </div>
              <div className="details_col">
                <p className="details_total">{playlists?.total}</p>
                <p className="details_prop">Playlists</p>
              </div>
              <div className="details_col">
                <p className="details_total">
                  {followedArtists?.artists.total}
                </p>
                <p className="details_prop">Following</p>
              </div>
            </div>
            <a onClick={logout} className="logout__btn">
              LOGOUT
            </a>
          </header>
          <section className="user__preview-section">
            <div className="user__preview-artists">
              <div className="artists_header">
                <h3>Top Artists of All Time</h3>
                <a></a>
              </div>
              <div>
                {topArtists?.items.slice(0, 20).map((item) => (
                  <div className="artists__row">
                    <a className="artists__pic">
                      <Avatar src={item.images[0].url} alt={item.name} />
                    </a>
                    <a className="artists__name">
                      <span>{item.name}</span>
                    </a>
                  </div>
                ))}
              </div>
            </div>
            <div className="user__preview-songs">
              <div className="songs_header">
                <h3>Top Songs of All Time</h3>
                <a></a>
              </div>
              <div>
                {topTracks?.items.slice(0, 20).map((item) => (
                  <SongRow track={item} />
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default UserInfo;
