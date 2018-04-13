import React, { Component } from 'react';
import './App.css';
import Yelp from 'react-icons/lib/fa/yelp'
import TripAd from 'react-icons/lib/fa/tripadvisor'
import FaFacebookOfficial from 'react-icons/lib/fa/facebook-official';

class Home extends Component {
  render() {
    return (      
    <div className="App">

    <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">

      <main role="main" className="inner cover">
        <h1 className="cover-heading">The Hoboken Gourmet Company</h1>
        <hr/>
        <p className="lead">Fresh food, friendly service, & a great atmosphere</p>
        <p className="lead">
          <a href="#" className="btn btn-lg btn-secondary">Learn more</a>
        </p>
        
      </main>

<div className="d-flex flex-row">
  <div className="p-2">      <div className="card" style={{width: 250 }}>
  {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
  <div className="card-body">
    <h5 className="card-title"><Yelp/>Yelp</h5>
    <p className="card-text">Finally had the eggs Benedict here, actually twice, they are good and so are the omelettes. Nice seating inside when it's cold.  This is now a go to brunch place for me when I'm Hoboken.</p>
    <a href="#" className="btn btn-primary"><Yelp/></a>
  </div>
</div></div>
  <div className="p-2">      <div className="card" style={{width: 250 }}>
   {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
  <div className="card-body">
    <h5 className="card-title"><TripAd/>Tripadvisor</h5>
    <p className="card-text">We were looking for a quaint interesting place for breakfast and we were not disappointed. We had great food, great portions, and great atmosphere. Looking forward to breakfast in Hoboken again.</p>
    <a href="#" className="btn btn-primary"><TripAd/></a>
  </div>
</div></div>
  <div className="p-2">      <div className="card" style={{width: 250 }}>
  {/*<img className="card-img-top" src="..." alt="Card image cap"/>*/}
  <div className="card-body">
    <h5 className="card-title"><FaFacebookOfficial/>Facebook</h5>
    <p className="card-text">       Excellent food, amazing and friendly staff!!!  Excellent food, amazing and friendly staff!!!This place is an asset to Hoboken!!!!  Did I mention the staff was amazing!!!!!  Did I mention the staff was amazing!!!!!    </p>
    <a href="#" className="btn btn-primary"><FaFacebookOfficial/></a>
  </div>
</div></div>
</div>
    </div>
    <br/>
    <br/>

    <br/>




      </div>)
  }
}

export default Home;
