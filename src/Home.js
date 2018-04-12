import React, { Component } from 'react';
import './App.css';

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
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  <div className="p-2">      <div className="card" style={{width: 250 }}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  <div className="p-2">      <div className="card" style={{width: 250 }}>
  <img className="card-img-top" src="..." alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
</div>
    </div>



      </div>)
  }
}

export default Home;
