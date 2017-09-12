import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import weather from '../data/weather.js'

export default class Weather extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='weather'>
        <div className='cat-hero' id='weather-hero'>
          <div className='weather-hero-text'>
            <h6>Keeping little ones cozy!</h6>
          </div>
        </div>
        <div className='product-flex'>
          {weather.map((product) =>
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
