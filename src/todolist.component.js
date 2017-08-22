import React from 'react';
import {ListGroup, ListGroupItem, Glyphicon} from 'react-bootstrap';

export default class TodoListComponent extends React.Component {
  delete(id) {
    this.props.handleDelete(id)
  }
  
  render() {
    let reg_list = this.props.todos.map( (elem, index) => {
      return (
        <ListGroupItem key={index}>{elem}<span className="btn btn-xs btn-default pull-right" onClick={this.delete.bind(this, index)}>
        <Glyphicon glyph="remove"/></span>
        </ListGroupItem>
      )
    })
    reg_list = reg_list.reverse();

    return (
      <ListGroup>
        {reg_list}
      </ListGroup>
    )
  }
}
