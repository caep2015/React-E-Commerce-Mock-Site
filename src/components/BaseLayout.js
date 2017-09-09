import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/BaseLayout.css'

export default class BaseLayout extends Component {

  render () {
    return (
      <div className='base-layout'>
        <nav className='main-nav'>
          <div className='nav-links'>
            <div>
              <img src={require('../images/hglkids-logo.JPG')} alt='' />
            </div>
            <div>
              <NavLink exact to='/' activeStyle={{color: 'fff'}}>Home</NavLink>
            </div>
            <div>
              <NavLink to='/item1' activeClassName='selected'>item1</NavLink>
            </div>
            <div>
              <NavLink to='/item2' activeClassName='selected'>item2</NavLink>
            </div>
            <div>
              <NavLink to='/item3' activeClassName='selected'>item3</NavLink>
            </div>
            <div>
              <NavLink to='/item4' activeClassName='selected'>item4</NavLink>
            </div>
          </div>
        </nav>

        {this.props.children}

        <footer className='footer'>
          <div className='footer-details'>
            <span></span>
          </div>
        </footer>
      </div>
    )
  }
}
