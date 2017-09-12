import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import '../styles/BaseLayout.css'

export default class BaseLayout extends Component {

  render () {
    return (
      <div className='base-layout'>
        <nav className='main-nav'>
         <div className='nav-container'>
          <ul className='nav-ul'>
           <li className='nav-item'><NavLink exact to='/' activeStyle={{
             color: 'fff'}}><span className='nav-link-text'><img className='hglkids-logo' src={require('../images/hglkids-logo.JPG')} alt="HGLkids logo"/></span></NavLink></li>
           <li className='nav-item'><NavLink to='/holiday' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'>Holiday</span></NavLink></li>
           <li className='nav-item'><NavLink to='/Toys' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'>Toys</span></NavLink></li>
           <li className='nav-item'><NavLink to='/Dolls' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'>Dolls</span></NavLink></li>
           <li className='nav-item'><NavLink to='/Clothes' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'>Clothes</span></NavLink></li>
           <li className='nav-item'><NavLink to='/Weather' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'>Outerwear</span></NavLink></li>
           <li className='nav-item'><NavLink to='/About' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'>About</span></NavLink></li>
           <li className='nav-item'><NavLink to='/contact' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'>Contact</span></NavLink></li>
           <li className='nav-item'><NavLink to='/search'><span className='nav-link-text'><i aria-hidden='true' className='fa fa-search'></i></span></NavLink></li>
           <li className='nav-item'><NavLink to='/cart' activeStyle={{
             color: '#bdc3c7'}}><span className='nav-link-text'><i aria-hidden='true' className='fa fa-shopping-bag'></i></span></NavLink></li>
          </ul>
         </div>
        </nav>


        {this.props.children}

        <footer className='footer'>
          <div className='footer-details'>
            <span>Copyright © 2017 by Carlota Pearl. All rights reserved.</span>
          </div>
        </footer>

      </div>
    )
  }
}
