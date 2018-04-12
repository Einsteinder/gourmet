import React, { Component } from 'react';
import './App.css';

class Home extends Component {
  render() {
    return (      
    <div className="App">

    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">

      <main role="main" class="inner cover">
        <h1 class="cover-heading">The Hoboken Gourmet Company</h1>
        <hr/>
        <p class="lead">Fresh food, friendly service, & a great atmosphere</p>
        <p class="lead">
          <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
        </p>
        
      </main>

<div class="d-flex flex-row">
  <div class="p-2">      <div class="card" style={{width: 250 }}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  <div class="p-2">      <div class="card" style={{width: 250 }}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
  <div class="p-2">      <div class="card" style={{width: 250 }}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div></div>
</div>
    </div>



      </div>)
  }
}

export default Home;
