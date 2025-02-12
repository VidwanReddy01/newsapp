import React, { Component } from 'react'
import {Link} from "react-router-dom";

export default class Navbar extends Component {
  render() {
    console.log('Welcome Navbar')
    return (
        <nav className={`navbar navbar-expand-lg bg-${this.props.mode === 'light' ? 'light' : 'dark'} navbar-${this.props.mode === 'light' ? 'light' : 'dark'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Thisisnews</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/">Link</a>
              </li> */}
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Categories
                </Link>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/business">business</Link></li>
                    <li><Link className="dropdown-item" to="/entertainment">entertainment</Link></li>
                    <li><Link className="dropdown-item" to="/health">health</Link></li>
                    <li><Link className="dropdown-item" to="/science">science</Link></li>
                    <li><Link className="dropdown-item" to="/sports">sports</Link></li>
                    <li><Link className="dropdown-item" to="/technology">technology</Link></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><Link className="dropdown-item" to="/general">general</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">About</Link>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
          </div>
          <div className={`form-check form-switch mx-3 text-${this.props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={this.props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark mode</label>
        </div>

        <form className="d-flex" role="search">
        <input className="form-control me-1" 
            onChange={this.props.handleInputChange} // Update state on input change
            type="search" 
            // placeholder={`Search in this ${category || 'Category'}`}
            placeholder="Search in this category"
            aria-label="Search"
            // value={this.props.searchQuery} // Controlled input
            /> 
        {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
      </form>

        </div>
      </nav>
    )
  }
}
