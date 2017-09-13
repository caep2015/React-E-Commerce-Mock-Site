import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import clothes from '../data/clothes.js'

export default class Clothes extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='clothes'>
        <div className='cat-hero' id='clothes-hero'>
          <div className='clothes-hero-text'>
            <h6>New Collection!</h6>
          </div>
        </div>
        <div className='clothes-product-flex' >
          {clothes.map((product) =>
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
