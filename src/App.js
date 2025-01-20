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
      mode : "light",
      searchQuery: '' // Store the search query
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

  // Handle input change to update searchQuery state
  handleInputChange = async (event) => {
        // this.setState({ searchQuery: event.target.value });
        // console.log(this.state.searchQuery, 'this.state.searchQuery in handleInputChange')
        const query = event.target.value; // Get the input value
        if (query.length > 3) { // Check if the length is greater than 3
            this.setState({ searchQuery: query }, () => {
                console.log(this.state.searchQuery, 'this.state.searchQuery in handleInputChange'); 
            });
        }
    }

  // // Handle form submission to fetch API data
  // handleSearchSubmit = async (event) => {
  //       console.log('STARTED')
  //       event.preventDefault(); // Prevent default form submission behavior
  //       console.log(this.state.searchQuery,'this.state.searchQuery in handleSearchSubmit before')
  //       this.setState({ searchQuery: this.state.searchQuery });  // Update the search query
  //       console.log(this.state.searchQuery,'this.state.searchQuery in handleSearchSubmit after')
  //   };



  render() {
    return (
      <div>
        <Router>
        <Navbar toggleMode={this.toggleMode} 
          mode={this.state.mode} 
          // handleSearchSubmit={this.handleSearchSubmit}
          handleInputChange={this.handleInputChange}
        />
        <Routes>
        <Route exact path="/" element={<NewsComponent pageSize={10} category={''} mode={this.state.mode} searchQuery={this.state.searchQuery}/>}></Route>
        <Route exact path="/business" element={<NewsComponent key="business" pageSize={10} mode={this.state.mode} category={'business'} searchQuery={this.state.searchQuery}/>}></Route>
        <Route exact path="/entertainment" element={<NewsComponent key="entertainment" pageSize={10} mode={this.state.mode} category={'entertainment'} searchQuery={this.state.searchQuery}/>}></Route>
        <Route exact path="/health" element={<NewsComponent key="health" pageSize={10} mode={this.state.mode} category={'health'} searchQuery={this.state.searchQuery}/>}></Route>
        <Route exact path="/science" element={<NewsComponent key="science" pageSize={10} mode={this.state.mode} category={'science'} searchQuery={this.state.searchQuery}/>}></Route>
        <Route exact path="/sports" element={<NewsComponent key="sports" pageSize={10} mode={this.state.mode} category={'sports'} searchQuery={this.state.searchQuery}/>}></Route>
        <Route exact path="/technology" element={<NewsComponent key="technology" pageSize={10} mode={this.state.mode} category={'technology'} searchQuery={this.state.searchQuery}/>}></Route>
        <Route exact path="/general" element={<NewsComponent key="general" pageSize={10} mode={this.state.mode} category={'general'} searchQuery={this.state.searchQuery}/>}></Route>
        </Routes>
        </Router>
      </div>   
    )
  }
}

// export default App;
