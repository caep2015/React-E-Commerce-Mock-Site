import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import holiday from '../data/holiday.js'

export default class Holiday extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='holiday'>
        <div className='cat-hero' id='holiday-hero'>
          <div className='holiday-hero-text'>
            <h2>Holiday Specials</h2>
          </div>
        </div>
        <div className='product-flex' >
          {holiday.map((product) =>
            <Link to={`${match.url}/${product.name}`}>
              <div className='cat-product' key={product.id}>
              <img src={product.img} alt={product.name} />
              <h4>{product.name}</h4>
            </div>
            </Link>
          )}
        </div>
      </div>
    )
  }
}
