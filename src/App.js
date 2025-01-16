// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import NewsComponent from './components/NewsComponent';
// import { fetchData } from "./components/NewsComponent";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default class App extends Component {
  // name = 'Vidwan'
  constructor(){
    super()
    // console.log('This is in constructor')
    this.state = {
      mode : "light"
    }
  }

  toggleMode = ()=>{
    if(this.state.mode === "light"){
      this.setState({mode:'dark'}) //this is for nav bar dark mode and light mode
      document.body.style.backgroundColor='black'; //this is for whole body dark mode and light mode
      document.body.style.color='white';
      // showAlert("success", "Dark mode set!")
    }
    else{
      this.setState({mode:'light'})  //this is for nav bar dark mode and light mode
      document.body.style.backgroundColor='white';  //this is for whole body dark mode and light mode
      document.body.style.color='black';
      // showAlert("success", "Light mode set!")
    }
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar toggleMode={this.toggleMode} mode={this.state.mode}/>
        <Routes>
        <Route exact path="/" element={<NewsComponent pageSize={10} category={''} mode={this.state.mode}/>}></Route>
        <Route exact path="/business" element={<NewsComponent key="business" pageSize={10} mode={this.state.mode} category={'business'}/>}></Route>
        <Route exact path="/entertainment" element={<NewsComponent key="entertainment" pageSize={10} mode={this.state.mode} category={'entertainment'}/>}></Route>
        <Route exact path="/health" element={<NewsComponent key="health" pageSize={10} mode={this.state.mode} category={'health'}/>}></Route>
        <Route exact path="/science" element={<NewsComponent key="science" pageSize={10} mode={this.state.mode} category={'science'}/>}></Route>
        <Route exact path="/sports" element={<NewsComponent key="sports" pageSize={10} mode={this.state.mode} category={'sports'}/>}></Route>
        <Route exact path="/technology" element={<NewsComponent key="technology" pageSize={10} mode={this.state.mode} category={'technology'}/>}></Route>
        <Route exact path="/general" element={<NewsComponent key="general" pageSize={10} mode={this.state.mode} category={'general'}/>}></Route>
        </Routes>
        </Router>
      </div>   
    )
  }
}

// export default App;
