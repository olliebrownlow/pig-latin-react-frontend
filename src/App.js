import React, { Component } from 'react';
import { Controller } from './components/Controller';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
        </header>
        <Controller />
      </div>
    );
  }
}

export default App;
