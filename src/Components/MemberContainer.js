import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import AgentSmith from '../images/AgentSmith.jpg';
import Dozer from '../images/Dozer.jpg';
import Chris from '../images/Chris.jpg';
import Neo from '../images/Neo1.jpg';
import Julia from '../images/julia400px.jpg'
import Flo from '../images/Flo.jpg'




export default class Example extends React.Component {
  render() {
    let person = this.props.props.match.params.name
    if (person === 'Florence') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col xs="6 imageHolder">
              <img className="matrixPic" src={Flo}></img>
            </Col>
            <Col xs="6 information">
              <h1>Florence Fong</h1>
              <a href="https://www.linkedin.com/in/florence-fong/">LinkedIn</a>
              <br />
              <a href="https://github.com/flofong">GitHub</a>
              <p className="whatIDid">Flo has worked a lot on this project</p>
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
            <Col xs="6 information">
            <h1>Matt Layden</h1>
              <a href="https://www.linkedin.com/in/matthew-layden-68059a167/">LinkedIn</a>
              <br />
              <a href="https://github.com/kobello">GitHub</a>
              <p className="whatIDid">Matt has worked a lot on this project</p>
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
            <Col xs="6 information">
            <h1>Dylan Morosini</h1>
              <a href="https://www.linkedin.com/in/djmorosini/">LinkedIn</a>
              <br />
              <a href="https://github.com/djmorosini">GitHub</a>
              <p className="whatIDid">Dylan has worked a lot on this project</p>
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
              <img className="matrixPic" src={Julia}></img>
            </Col>
            <Col xs="6 information">
              <h1>Julia Kantarovsky</h1>
              <a href="https://linkedin.com/in/juliakantarovsky">LinkedIn</a>
              <br />
              <a href="https://github.com/JuliaKan">GitHub</a>
              <p className="whatIDid">Julia was a Full Stack Developer on this project. She spent the first sprint working on the backend, using Serverless to deploy  the app. She specifically employed the use of AWS Lambda, AWS DynamoDB, and AWS S3. She spent the second and third sprints working on the front end using React. She specifically created the "Team" components.</p>
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
              <img className="matrixPic" src={Chris}></img>
            </Col>
            <Col xs="6 information">
            <h1>Chris Frank</h1>
              <a href="https://www.linkedin.com/in/christopherfrank/">LinkedIn</a>
              <br />
              <a href="https://github.com/cfrank1977">GitHub</a>
              <p className="whatIDid">Engineering team manager. Product Owner. Full stack developer who can roll up his sleeves and support the team to move through roadblocks.</p>
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
            <Col xs="6 information">
            <h1>Mat Gilbert</h1>
              <a href="Mat/linkedin">LinkedIn</a>
              <br />
              <a href="Mat/github">GitHub</a>
              <p className="whatIDid">Mat was the advisor on this project</p>
            </Col>
          </Row>

        </Container>
      );
    }


  }
}