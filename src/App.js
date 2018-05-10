import React, { Component } from 'react';

import TimersDashboard from './components/TimersDashboard';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>Time Tracker</h1>
        <TimersDashboard />
      </div>
    );
  }
}

export default App;
