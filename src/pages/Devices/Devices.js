import React, { Component } from 'react';
import log from '../../logger';
import logo from './logo.svg';
import './styles.css';

class Devices extends Component {
  render() {
    log.info('render', 'Devices');
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Devices</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Devices;
