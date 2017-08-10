import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavComponent extends React.Component {
  render() {
    return (
      <Navbar collaspeOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
          <Navbar.Brand>EV Todo App v1</Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey="1"><Link to="/">Home</Link></NavItem>
          <NavItem eventKey="1"><Link to="/todo">Todo</Link></NavItem>
          <NavItem eventKey="1"><Link to="/about">About</Link></NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
