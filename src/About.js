import React, { Component } from 'react';
import img4 from './image/4.jpg';

class About extends Component {
  render() {
    return (
      
        <div className="cover-container-photo d-flex flex-wrap  p-3 mx-auto"  id="with-hash-fragment" >

            <img className="aboutphoto" src={img4} />


        </div>
    );
  }
}

export default About;
