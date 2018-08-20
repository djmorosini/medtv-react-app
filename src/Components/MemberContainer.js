import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AgentSmith from '../images/AgentSmith.jpg';
import Dozer from '../images/Dozer.jpg';
import TheOracle from '../images/TheOracle.jpg';
import Trinity from '../images/Trinity1.jpg';
import Morpheus from '../images/Morpheus1.jpg';
import Neo from '../images/Neo1.jpg'




export default class Example extends React.Component {
  render() {
    let person = this.props.props.match.params.name
    if (person === 'Flo') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6">
              <img src={TheOracle}></img>
            </Col>
            <Col xs="6">
              <a href="Flo/linkedin">LinkedIn</a>
              <br />
              <a href="Flo/github">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Matt') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6">
              <img src={Dozer}></img>
            </Col>
            <Col xs="6">
              <a href="Matt/linkedin">LinkedIn</a>
              <br />
              <a href="Matt/github">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Dylan') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6">
              <img src={Neo}></img>
            </Col>
            <Col xs="6">
              <a href="Dylan/linkedin">LinkedIn</a>
              <br />
              <a href="Dylan/github">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Julia') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6">
              <img src={Trinity}></img>
            </Col>
            <Col xs="6">
              <a href="Julia/linkedin">LinkedIn</a>
              <br />
              <a href="Julia/github">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Chris') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6">
              <img src={Morpheus}></img>
            </Col>
            <Col xs="6">
              <a href="Chris/linkedin">LinkedIn</a>
              <br />
              <a href="Chris/github">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Mat') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6">
              <img src={AgentSmith}></img>
            </Col>
            <Col xs="6">
              <a href="Mat/linkedin">LinkedIn</a>
              <br />
              <a href="Mat/github">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }


  }
}