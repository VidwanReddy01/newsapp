// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';

export default class App extends Component {
  name = 'Vidwan'
  render() {
    return (
      <div>
        <Navbar/>
        <NewsComponent pageSize={10}/>
      </div>   
    )
  }
}

// export default App;
