import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Home from './Home';
import About from './About';
import Photo from './Photo';
import Order from './Order';
import Menu from './Menu';
import { Button } from 'react-bootstrap';
import { HashLink as LinkH } from 'react-router-hash-link';


class App extends Component {
  render() {
    return (
        <Router>

      <div>
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header class="masthead mb-auto">
        <div class="inner">

          <nav class="nav nav-masthead justify-content-center">
          
          <Link class="nav-link" to="/">HOME</Link>
          <LinkH to="/photo#with-hash-fragment">Link to Hashphoto</LinkH>

            <Link class="nav-link " to="/about">ABOUT</Link>
            <Link class="nav-link " to="/photo">PHOTOS</Link>

            <Link class="nav-link " to="/menu">MENU</Link>

            <Link class="nav-link " to="/order">ORDER TAKEOUT</Link>

        

          </nav>
        </div>
      </header>


    </div>
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/photo" component={Photo} />
      <Route path="/menu" component={Menu} />
      <Route path="/order" component={Order} />
      <footer class="mastfoot mt-auto">
        <div class="inner">
          <p>Design by <a href="https://twitter.com/">Einsteinder</a>.</p>
        </div>
      </footer>
      </div>
      </Router>

    );
  }
}

export default App;
