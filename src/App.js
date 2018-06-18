import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero';
import Content from './Content'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Content />
      </div>
    );
  }
}

export default App;
