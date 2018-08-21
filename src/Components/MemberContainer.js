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
    if (person === 'Florence') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6 imageHolder">
              <img className="matrixPic" src={TheOracle}></img>
            </Col>
            <Col xs="6">
              <h1>Florence Fong</h1>
              <a href="https://www.linkedin.com/in/florence-fong/">LinkedIn</a>
              <br />
              <a href="https://github.com/flofong">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Matt') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6 imageHolder">
              <img className="matrixPic" src={Dozer}></img>
            </Col>
            <Col xs="6">
            <h1>Matt Layden</h1>
              <a href="https://www.linkedin.com/in/matthew-layden-68059a167/">LinkedIn</a>
              <br />
              <a href="https://github.com/kobello">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Dylan') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6 imageHolder">
              <img className="matrixPic" src={Neo}></img>
            </Col>
            <Col xs="6">
            <h1>Dylan Morosini</h1>
              <a href="https://www.linkedin.com/in/djmorosini/">LinkedIn</a>
              <br />
              <a href="https://github.com/djmorosini">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Julia') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6 imageHolder">
              <img className="matrixPic" src={Trinity}></img>
            </Col>
            <Col xs="6">
              <h1>Julia Kantarovsky</h1>
              <a href="https://linkedin.com/in/juliakantarovsky">LinkedIn</a>
              <br />
              <a href="https://github.com/JuliaKan">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Chris') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6 imageHolder">
              <img className="matrixPic" src={Morpheus}></img>
            </Col>
            <Col xs="6">
            <h1>Chris Frank</h1>
              <a href="https://www.linkedin.com/in/christopherfrank/">LinkedIn</a>
              <br />
              <a href="https://github.com/cfrank1977">GitHub</a>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Mat') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6 imageHolder">
              <img className="matrixPic" src={AgentSmith}></img>
            </Col>
            <Col xs="6">
            <h1>Mat Gilbert</h1>
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