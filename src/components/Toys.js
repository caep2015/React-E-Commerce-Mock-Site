import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import toys from '../data/toys.js'

export default class Toys extends Component {
  render () {
    let match = this.props.match

    return (
      <div className='toys'>
        <div className='cat-hero' id='toys-hero'>
        </div>
        <div className='product-flex' >
          {toys.map((product) =>
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
