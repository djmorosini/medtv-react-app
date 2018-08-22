import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Mat from '../images/mat.png';
import Matt from '../images/matt.jpg';
import Chris from '../images/Chris.jpg';
import Dylan from '../images/dylanHeadshot.jpg';
import Julia from '../images/julia400px.jpg'
import Flo from '../images/Flo.jpg'




export default class Example extends React.Component {
  render() {
    let person = this.props.props.match.params.name
    if (person === 'Florence') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col className='col-lg-6'>
              <img className="matrixPic" src={Flo} alt='Team Matrix'></img>
            </Col>
            <Col className='col-lg-6'>
              <h1>Florence Fong</h1>
              <a href="https://www.linkedin.com/in/florence-fong/">LinkedIn</a>
              <br />
              <a href="https://github.com/flofong">GitHub</a>
              <p className="whatIDid">Florence is a curious and highly adaptable individual. She pays attention to detail and is authentic, scientific, and looks forward to entering into the web development industry.</p>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Matt') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col className='col-lg-6'>
              <img className="matrixPic" src={Matt} alt='Team Matrix'></img>
            </Col>
            <Col className='col-lg-6'>
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
            <Col className='col-lg-6'>
              <img className="matrixPic" src={Dylan} alt='Team Matrix'></img>
            </Col>
            <Col className='col-lg-6'>
            <h1>Dylan Morosini</h1>
              <a href="https://www.linkedin.com/in/djmorosini/">LinkedIn</a>
              <br />
              <a href="https://github.com/djmorosini">GitHub</a>
              <p className="whatIDid">Dylan took the lead on converting the static html pages into a more dynamic react application while also preparing the front-end client to connect to the AWS back-end. He specifically worked on improving the site by limiting interactions with the back-end database and persisting the state of the application.</p>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Julia') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col className='col-lg-6'>
              <img className="matrixPic" src={Julia} alt='Team Matrix'></img>
            </Col>
            <Col className='col-lg-6'>
              <h1>Julia Kantarovsky</h1>
              <a href="https://linkedin.com/in/juliakantarovsky">LinkedIn</a>
              <br />
              <a href="https://github.com/JuliaKan">GitHub</a>
              <p className="whatIDid">Julia was a Full Stack Developer on this project. She spent the first sprint working on the backend, using Serverless to deploy the app. She specifically employed the use of AWS Lambda, AWS DynamoDB, and AWS S3. She spent the second and third sprints working on the front end using React. She specifically created the "Team" components.</p>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Chris') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col className='col-lg-6'>
              <img className="matrixPic" src={Chris} alt='Team Matrix'></img>
            </Col>
            <Col className='col-lg-6'>
            <h1>Chris Frank</h1>
              <a href="https://www.linkedin.com/in/christopherfrank/">LinkedIn</a>
              <br />
              <a href="https://github.com/cfrank1977">GitHub</a>
              <p className="whatIDid">Chris took the lead on building our enterprise-class backend using the Serverless.com framework. We deployed our backend to AWS. It consists of DynamoDB, Node.js as AWS Lambdas, and an API Gateway. Additionally, we host the media for the site (videos & thumbnails) in S3. Chris also developed several React Components for the frontend. Specifically the Video Player, Video Details, and the Filter/Sub-category sidebar.</p>
            </Col>
          </Row>

        </Container>
      );
    }
    if (person === 'Mat') {
      return (
        <Container className='personDetails'>

          <Row>
            <Col className='col-lg-6'>
              <img className="matrixPic" src={Mat} alt='Team Matrix'></img>
            </Col>
            <Col className='col-lg-6'>
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