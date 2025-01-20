import React, { Component } from 'react'
import "./NoResults.css"; // Include this CSS file or add equivalent styles

export default class NoResults extends Component {
  render() {
    return (
        <div className="tooltip-container">
        <button className="tooltip-trigger">No results found</button>
        <div className="tooltip">Try searching based on the category selected</div>
        </div>

    )
  }
}
