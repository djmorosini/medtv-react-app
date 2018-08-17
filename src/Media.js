import React from 'react';
import { Media } from 'reactstrap';
import AgentSmith from './images/AgentSmith.jpg';
import Dozer from './images/Dozer.jpg';
import TheOracle from './images/TheOracle.jpg';
import Trinity from './images/Trinity1.jpg';
import Morpheus from './images/Morpheus1.jpg';
import Neo from './images/Neo1.jpg'




const Team = () => {
  return (
    <div className="d-flex">
      <Media className="Mat">
        <Media left top href="#">
          <Media object src={ AgentSmith } alt="Picture of Mat" />
        </Media>
        <Media body>
          <Media heading>
            Mat Gilbert
          </Media>
            Mat is committed to taking down the system he was once part of.
            </Media>
      </Media>
      <Media className="Flo">
        <Media left middle href="#">
        <Media object src={ TheOracle } alt="Picture of Flo"/>
        </Media>
        <Media body>
          <Media heading>
             Florence Fong
            </Media>
            Flo is a front-end ninja.
            </Media>
      </Media>
      <Media className="Dylan">
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
      <Media className="Matt">
        <Media left top href="#">
          <Media object src={ Dozer } alt="Picture of" />
        </Media>
        <Media body>
          <Media heading>
            Matt Layden 
          </Media>
            Mat loves SDKs.
            </Media>
      </Media>
      
      <Media className="Julia">
        <Media left middle href="#">
        <Media object src={ Trinity } alt="Picture of"/>
        </Media>
        <Media body>
          <Media heading>
             Julia Kantarovsky 
            </Media>
            Julia Gits React.
            </Media>
      </Media>
     
      <Media className="Chris">
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