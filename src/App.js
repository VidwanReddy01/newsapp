// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
// import { fetchData } from "./components/NewsComponent";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default class App extends Component {
  // name = 'Vidwan'
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<NewsComponent pageSize={10} category={''}/>}></Route>
        <Route exact path="/business" element={<NewsComponent pageSize={10} category={'business'} onClick={this.fetchData}/>}></Route>
        <Route exact path="/entertainment" element={<NewsComponent pageSize={10} category={'entertainment'}/>}></Route>
        <Route exact path="/health" element={<NewsComponent pageSize={10} category={'health'}/>}></Route>
        <Route exact path="/science" element={<NewsComponent pageSize={10} category={'science'}/>}></Route>
        <Route exact path="/sports" element={<NewsComponent pageSize={10} category={'sports'}/>}></Route>
        <Route exact path="/technology" element={<NewsComponent pageSize={10} category={'technology'}/>}></Route>
        <Route exact path="/general" element={<NewsComponent pageSize={10} category={''}/>}></Route>
        </Routes>
        </Router>
      </div>   
    )
  }
}

// export default App;
