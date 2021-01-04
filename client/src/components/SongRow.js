import React from 'react';

import './css/songRow.css';

import { Avatar } from '@material-ui/core';

function SongRow({ track }) {
  let duration = track.duration_ms;
  let min = Math.floor(duration / 60000);
  let sec = ((duration % 60000) / 1000).toFixed(0);
  return (
    <a className="song__row">
      <div>
        <div className="song__album-art">
          <Avatar src={track.album.images[0].url} alt={track.name} />
        </div>
      </div>

      <div className="song__details">
        <span className="songDetails__row">
          <span className="song__name">{track.name}</span>
          <div className="song__album">
            <span>{track.artists[0].name}&nbsp;</span>&nbsp;.&nbsp;{track.name}
          </div>
        </span>

        <span className="track__length">{`${min}:${
          sec < 10 ? '0' : ''
        }${sec}`}</span>
      </div>
    </a>
  );
}

export default SongRow;
