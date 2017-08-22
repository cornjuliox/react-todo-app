import React from 'react';
import {
    Row, 
    Col,
    Image,
    Panel
} from 'react-bootstrap';
import Watchdogman from './Watchdogman2.png';

export default class AboutComponent extends React.Component {
  render() {
    return (
      <Row>
          <Col md={2}></Col>
          <Col md={4}>
            <Image src={Watchdogman}></Image>
            </Col>
          <Col md={6}>
            <Panel header="About">
              The author was an S-Class Rank 12 professional hero who was in charge of Q-City. 
              <hr></hr> 
              Following a long,
              illustrious career as a superhero, the author retired to pursue a degree in Computer Science and now
              works as a software engineering, tackling engineering problems with the same ferocity and skill he had when 
              he ran around tearing monsters to pieces while dressed like a dog.
            </Panel>
          </Col>
      </Row>
    )
  }
}
