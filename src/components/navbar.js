import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (      
          <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/" className="navbar-brand">Assignment 3</Link>
          <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
            <Link to="/" className="nav-link">Movies</Link>
            </li>
            <li className="navbar-item">
            <Link to="/insert" className="nav-link">Add Movie</Link>
            </li>
            <li className="navbar-item">
            <Link to="/update" className="nav-link">Update Movie</Link>
            </li>
            <li className="navbar-item">
            <Link to="/delete" className="nav-link">Delete Movie</Link>
            </li>
          </ul>
          </div>
        </nav>
        );
    }
}
