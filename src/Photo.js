import React, { Component ,Image} from 'react';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import counter from './counter.jpg'; // Tell Webpack this JS file uses this image
import download from './image/download.jpeg';
// ...later

class Photo extends Component {
  render() {
    return (
      <div>

      <div
      id="with-hash-fragment"
></div>

<img src={ counter} />
<img src={ download} />

  

         </div>

    );
  }
}

export default Photo;
