import React, { Component } from 'react';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="hero">
          <div className='main-image-text'>
            <h4>Shop Early for Christmas</h4>
            <span><h2>We&apos;ve got you covered.</h2></span>
          </div>
        </header>
        <div className='featured-products'>
          <div className='featured-flex'>
           <div className='image-details'>
            <img src={require('../images/featured1.jpg')} alt="holiday apparel" />
           </div>
           <div className='image-details'>
            <img src={require('../images/featured2.jpg')} alt='books' />
           </div>
           <div className='image-details'>
            <img src={require('../images/featured3.jpg')} alt='toys' />
           </div>
           <div className='image-details'>
            <img src={require('../images/featured4.jpg')} alt='weather gear' />
           </div>
         </div>
       </div>
     </div>
    )
  }
}

export default App;
