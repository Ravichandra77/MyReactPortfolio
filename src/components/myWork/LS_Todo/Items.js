import React, {Component} from 'react';
import {ListGroup} from "react-bootstrap";
import FlipMove from "react-flip-move";


/* ===== items list ===== */
export default class Items extends Component {
    render() {
      // grab items array from state, map each item in `li`
      let items = this.props.items.map((item, key) => {
        return (
          
        <ListGroup className="justify-content-between flex-row" key={key}>
        <ListGroup.Item className="flex-fill border-0 ls"  onClick={this.handleRemove.bind(this)}>        
          {item} 
        </ListGroup.Item> 
        </ListGroup>
     
        )
      })
      return (
        <FlipMove duration={300} easing="ease-in-out" >
          {items}
        </FlipMove>
      )
    }
    handleRemove(item) {
     console.log(this.props.removeItem(item))
      this.props.removeItem(item.currentTarget.innerText) // pass value of item to delete to parent component
    }
  }

