import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="hero">
          <div className='main-image-text'>
            <h6>Shop Early for Christmas</h6>
            <span><h2>We&apos;ve got you covered.</h2></span>
          </div>
        </header>
        <div className='featured-products'>
          <div className='featured-flex'>
           <Link to='/clothes'>
           <div className='image-details'>
            <img src={require('../images/featured1.jpg')} alt="clothes" />
           </div>
           </Link>
           <Link to='/holiday'>
           <div className='image-details'>
            <img src={require('../images/featured2.jpg')} alt='holiday specials' />
           </div>
           </Link>
           <Link to='/toys'>
           <div className='image-details'>
            <img src={require('../images/featured3.jpg')} alt='toys' />
           </div>
           </Link>
           <Link to='/weather'>
           <div className='image-details'>
            <img src={require('../images/featured4.jpg')} alt='outerwear' />
           </div>
           </Link>
         </div>
       </div>
     </div>
    )
  }
}

export default App;
