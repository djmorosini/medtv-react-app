import React from 'react';
import { Media } from 'reactstrap';
import AgentSmith from './images/AgentSmith.jpg';
import Dozer from './images/Dozer.jpg';
import TheOracle from './images/TheOracle.jpg';
import Trinity from './images/Trinity.jpg';
import Morpheus from './images/Morpheus.jpg';
import Neo from './images/Neo.jpg'




const Team = () => {
  return (
    <div>
      <Media>
        <Media left top href="#">
          <Media object src={ AgentSmith } alt="Picture of" />
        </Media>
        <Media body>
          <Media heading>
            Mat Gilbert
          </Media>
            Mat is our TA.
            </Media>
      </Media>
      <Media className="mt-1">
        <Media left middle href="#">
        <Media object src={ AgentSmith } height="200px" alt="Picture of"/>
        </Media>
        <Media body>
          <Media heading>
             Florence Fong
            </Media>
            Flo is ...
            </Media>
      </Media>
      <Media className="mt-1">
        <Media left bottom href="#">
          <Media object src={ Neo } alt="Picture of" />
        </Media>
        <Media body>
            <Media heading>
                Dylan Morosini
                </Media>
                Dylan can't stop won't stop.
                </Media>
      </Media>
      <Media>
        <Media left top href="#">
          <Media object src={ Dozer } alt="Picture of" />
        </Media>
        <Media body>
          <Media heading>
            Matt Layden
          </Media>
            Mat is ...
            </Media>
      </Media>
      
      <Media className="mt-1">
        <Media left middle href="#">
        <Media object src={ Trinity } alt="Picture of"/>
        </Media>
        <Media body>
          <Media heading>
             Julia Kantarovsky
            </Media>
            Julia is ...
            </Media>
      </Media>
     
      <Media className="mt-1">
        <Media left middle href="#">
        <Media object src={ Morpheus } alt="Picture of"/>
        </Media>
        <Media body>
          <Media heading>
             Chris Frank
            </Media>
            Chris loves the Agile.
            </Media>
      </Media>
    </div>
  );
};

export default Team;