import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="hero">
          <div className='main-image'>
            <h4>Shop Early for Christmas</h4>
            <span><h2>We have got you covered.</h2></span>
          </div>
        </header>
        <div className='featured-flex'>
          <div className='image-details'>
            <img src='' alt="item1" />
            <h5>Item1</h5>
          </div>
          <div className='image-details'>
            <img src='' alt='item2' />
            <h5>Item2</h5>
          </div>
          <div className='image-details'>
            <img src='' alt='item3' />
            <h5>Item3</h5>
          </div>
          <div className='image-details'>
            <img src='' alt='item5' />
            <h5>Item4</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
