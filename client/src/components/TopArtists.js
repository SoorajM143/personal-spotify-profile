import React, { Component } from 'react';
import { getTopArtistsLong } from '../spotify';
import { catchErrors } from '../utils';

import './css/TopArtists.css';

class TopArtists extends Component {
  state = {
    topArtists: null,
    activeRange: 'long',
  };

  apiCalls = {
    long: getTopArtistsLong(),
  };

  componentDidMount() {
    catchErrors(this.getData());
  }

  async getData() {
    const { data } = await getTopArtistsLong();
    this.setState({ topArtists: data });
  }

  render() {
    const { topArtists, activeRange } = this.state;
    return (
      <div>
        <main className="main__tab">
          <header className="main__header-artists">
            <h2>Top Artists</h2>
          </header>
          <div className="artists__container">
            {topArtists?.items.map(({ images, name }, i) => (
              <div className="topArtists__artist">
                <img src={images[1].url} alt={name} />
                <h4>{name}</h4>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }
}

export default TopArtists;
