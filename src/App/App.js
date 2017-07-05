import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import Body from './Components/Body.js';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
            <Header/>

        </div>
        <div>
            <Body/>
        </div>

      </div>
    );
  }
}

export default App;
