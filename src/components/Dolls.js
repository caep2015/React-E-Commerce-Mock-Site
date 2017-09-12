import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import dolls from '../data/dolls.js'

export default class Dolls extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='dolls'>
       <div className='cat-hero' id='dolls-hero'>
        <div className='dolls-hero-text'>
          <h2>Happy is that easy!</h2>
        </div>
      </div>
      <div className='product-flex' >
        {dolls.map((product) =>
          <Link to={`${match.url}/${product.name}`}>
            <div className='cat-product-target' key={product.id}>
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
