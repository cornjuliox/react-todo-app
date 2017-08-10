import React from 'react';
import {
    Row, 
    Col,
    Jumbotron, 
    Button,
    Panel
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class HomeComponent extends React.Component {
  render() {
    return ( 
      <Row >
        <Col xs={10} xsOffset={1} sm={10} smOffset={1} md={10} mdOffset={1} lg={10} lgOffset={1}>
          <Jumbotron>
            <h1>Making To-Do Simple</h1>
            <p>Spend less time thinking about things to do, and more time actually doing things</p>
            <p><Link to="/todo"><Button>Try it!</Button></Link></p>
          </Jumbotron>
          <Panel header="Introduction">
            Made by the same brilliant mind that brought classics such as 'Hello World' and 'Fizzbuzz', Todo App hopes to revolutionize the way the
            world works by leveraging the latest in front-end technologies to maximize value and advance your personal agenda - one task at a time.
          </Panel>
        </Col>
      </Row>
      
   )
  }
}
