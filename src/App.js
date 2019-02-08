import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CustomBar from './components/CustomBar/CustomBar';
import MainPageImage from './components/MainPageImage/MainPageImage';


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  

  render() {
    return (
      <div className="App">
        <Header />
        <CustomBar />
        <MainPageImage />
      </div>
    );
  }
}

export default App;
