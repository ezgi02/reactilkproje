import CatagoriyList from "./CatagoriyList";
import { Container,Row,Col } from 'reactstrap'
import ProductList from "./ProductList";

import React, { Component } from 'react'

export default class App extends Component {
  state={currentCategory:""}
  changeCategory  =(catagoriy) => {
    
    this.setState({currentCategory:catagoriy.catagoriyName})
    
}   
  render() {
    return (
      <div>
        <Container>
        <Row>
          <Col xs='3'>
           <CatagoriyList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory}/>
          </Col>
          <Col xs='9'>
            <ProductList currentCategory={this.state.currentCategory} />
          </Col>
        </Row>
      </Container>
      </div>
    )
  }
}
