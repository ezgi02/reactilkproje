import React, { Component } from 'react'
import { ListGroup,ListGroupItem } from 'reactstrap'
export default class CatagoriyList extends Component {
    state   = { 
        categories:[
        {catagoriyId:1,catagoriyName:"etiler"},
        {catagoriyId:2,catagoriyName:"bagcılar"}
    ],
    
};

  render() {
    return (
      <div>
        <h1>CatagoriyList</h1>
        <ListGroup>
            {this.state.categories.map(catagoriy => (
                <ListGroupItem onClick={()=>this.props.changeCategory(catagoriy)} key={catagoriy.catagoriyId}>{catagoriy.catagoriyName}</ListGroupItem>
            ))}
            <ListGroupItem></ListGroupItem>
  
        </ListGroup>
        <h4>{this.props.currentCategory}</h4>
      </div>
    )
  }
}
