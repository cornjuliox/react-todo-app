import React from 'react';
import {
    Row, 
    Col
} from 'react-bootstrap';

export default class AboutComponent extends React.Component {
  render() {
    return (
      <Row>
          <Col md={6}>
            <h1> Left </h1>
            </Col>
          <Col md={6}>
            <h1> Right </h1>
            </Col>
      </Row>
    )
  }
}
