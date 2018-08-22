import React from 'react';
import { Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import AgentSmith from '../images/AgentSmith.jpg';
import Dozer from '../images/Dozer.jpg';
import TheOracle from '../images/TheOracle.jpg';
import Trinity from '../images/Trinity1.jpg';
import Morpheus from '../images/Morpheus1.jpg';
import Neo from '../images/Neo1.jpg'
import TheTeam from '../images/teamPhoto.jpg'


class Team extends React.Component {
  render() {
    const members = [
      {
        'name': 'Matt',
        'shortbio': 'Matt loves SDKs.',
        'src': Dozer
      },
      {
        'name': 'Dylan',
        'shortbio': "Dylan can't stop won't stop.",
        'src': Neo
      },
      {
        'name': 'Julia',
        'shortbio': 'Julia Gits React.',
        'src': Trinity
      },
      {
        'name': 'Florence',
        'shortbio': 'Florence is a front-end ninja.',
        'src': TheOracle
      },
      {
        'name': 'Chris',
        'shortbio': 'Chris loves the Agile.',
        'src': Morpheus
      },
      {
        'name': 'Mat',
        'shortbio': 'Mat is committed to taking down the system he was once part of.',
        'src': AgentSmith
      },
    ]


    const memberList = members.map((member) => {
      return (
        <Media key={member.name}>
          <Media left top >
            <Link to={`/meet-our-team/${member.name}`} params={{ name: member.name }}>
              <div><Media object src={member.src} /></div>
            </Link>
          </Media>

          <Media body>
            <Media heading>
              <Link className="memberName" to={`/meet-our-team/${member.name}`} params={{ name: member.name }}>
                {member.name}</Link>
            </Media>
            {member.shortbio}
          </Media>
        </Media>


      )



    })





    return (
      <div className='d-flex flex-column team-wrap'>
        <div className="d-flex team">
          {memberList}
        </div>
        <img className='team-photo' alt='Full Team' src={TheTeam}></img>
        <p className='team-text'>The Team, from left to right, Chris Frank, Florence Fong, Dylan Morosini, Julia Kantarovsky, Matt Layden</p>
      </div>
    );
  }
};

export default Team;


