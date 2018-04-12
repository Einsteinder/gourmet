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
      <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <header className="masthead mb-auto">
        <div className="inner">

          <nav className="nav nav-masthead justify-content-center">
          
          <Link className="nav-link" to="/">HOME</Link>

            <Link className="nav-link " to="/about">ABOUT</Link>
            <LinkH className="nav-link " to="/photo#with-hash-fragment">PHOTOS</LinkH>

            <Link className="nav-link " to="/menu">MENU</Link>

            <Link className="nav-link " to="/order">ORDER TAKEOUT</Link>

        

          </nav>
        </div>
      </header>


    </div>
      <Route path="/" component={Home} />
      <Route path="/About" component={About} />
      <Route path="/photo" component={Photo} />
      <Route path="/menu" component={Menu} />
      <Route path="/order" component={Order} />
      <footer className="mastfoot mt-auto">
        <div className="inner">
          <p>Design by <a href="https://twitter.com/">Einsteinder</a>.</p>
        </div>
      </footer>
      </div>
      </Router>

    );
  }
}

export default App;
