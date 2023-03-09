import React, { Component } from 'react'

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>Product List</h1>
        <h2>{this.props.currentCategory}</h2>
      </div>
    )
  }
}
