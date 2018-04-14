import React, { Component, Image } from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import counter from './counter.jpg'; // Tell Webpack this JS file uses this image
import { HashLink as LinkH } from 'react-router-hash-link';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Yelp from 'react-icons/lib/fa/yelp'
import TripAd from 'react-icons/lib/fa/tripadvisor'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';

import download from './image/download.jpeg';
import img2 from './image/2.jpg';
import img3 from './image/3.jpg';

import img4 from './image/4.jpg';

import img5 from './image/5.jpg';



// ...later

class Photo extends Component {
  render() {
    return (


        <div className="cover-container-photo d-flex flex-wrap  p-3 mx-auto"  id="with-hash-fragment" >
            <img className="photo" src={counter} />
            <img className="photo" src={download} />
            <img className="photo" src={img2} />

            <img className="photo" src={img3} />

            <img className="photo" src={img4} />

            <img className="photo" src={img5} />

        </div>



    );
  }
}

export default Photo;
