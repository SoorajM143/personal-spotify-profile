import React, { Component } from 'react';
import { token } from './spotify';
import Login from './components/Login';
import Profile from './components/Profile';
import './App.css';

class App extends Component {
  state = {
    token: ' ',
  };

  componentDidMount() {
    this.setState({ token });
  }

  render() {
    const { token } = this.state;
    return <div className="App">{token ? <Profile /> : <Login />}</div>;
  }
}

export default App;
