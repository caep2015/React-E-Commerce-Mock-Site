import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <div className='About'>
        <div className='cat-hero' id='about-hero'>
          <div className= 'about-hero-text'>
            <h2>About</h2>
          </div>
        </div>
        <div className='adout-page-text'>
          <div>
            <h4>Welcome to HGLkids</h4>
          </div>
          <div>
            <p>This is a mock example of an online store with the ability to view details on product and add those products to a cart. Users do not have the ability to purchase anything on this site, as it is a mock up. Styling was to mimic that of the Apple store. </p>
          </div>
        </div>
      </div>
    )
  }
}
