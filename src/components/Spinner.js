import React, { Component } from "react";
import "./LoadingSpinner.css"; // Include this CSS file or add equivalent styles

class Spinner extends Component {
  render() {
    return (
      // <div className="text-center1">
      //   <div className="spinner"></div>
      //  </div>
      <div className="text-center1" id="page">
        <div className="spinner" id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3">Please wait...</div>
        </div>
      </div>
    );
  }
}

export default Spinner;
