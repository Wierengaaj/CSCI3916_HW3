import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from './components/navbar';
import MovieQuery from './components/movie-list';
import MovieUpdate from './components/movie-update';
import MovieInsert from './components/movie-insert';
import MovieDelete from './components/movie-delete';



//import logo from './logo.svg';
//import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={MovieQuery}/>
        <Route path="/update/" exact component={MovieUpdate}/>
        <Route path="/insert" exact component={MovieInsert}/>
        <Route path="/delete" exact component={MovieDelete}/>
      </div>
    </Router>

  );
}

export default App;
