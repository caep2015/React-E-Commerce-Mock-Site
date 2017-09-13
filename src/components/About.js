import React, { Component } from 'react'

export default class About extends Component {
  render () {
    return (
      <div className='About'>
        <div className='cat-hero' id='about-hero'></div>
        <div className='about-page-text'>
          <div><h4>Welcome to HGLkids!</h4></div>
          <div>
            <p>The ultimate goal of HGLkids (Happy Go Lucky kids) is to keep babies and children happy, comfortably dressed for play, and cozy when it gets cold.</p>
            <br></br>
            <p>This is a mock example of an online store with the ability to view details on products and add those products to a cart. </p>
            <br></br>
            <p>Users do not have the ability to purchase anything on this site, as it is a mock up.</p>
            <br></br>
            <div className = "small"> Styling was to mimic that of the Apple Store. The HGLkids name, logo, and motto are mine from a real online store I owned for 10 years.</div>
          </div>
        </div>
      </div>
    )
  }
}
