import React, { Component } from 'react';
import './App.css';
import Title from './components/title';
import PhotoEditor from './components/photo-editor';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title name="Photonic Photo Editor" />
        <PhotoEditor />
      </div>
    );
  }
}

export default App;

