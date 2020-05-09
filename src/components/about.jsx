import React from 'react';

import Skills from './Skills';

import trove from '../images/trove.png';
import seagate from '../images/seagate.jpg';
import me from '../images/me.jpg';

const aboutMe = [
  "Hi, I'm Brandon",
  'I was born and raised in Texas.',
  'I moved to SF in 2017 to pursue my passion in software and technology.',
  "I've worked extensively in JavaScript with Node and React since I use it for work and personal projects,.",
  "However, these days I'm super interested Python and Go.",
  "I would say I'm a very curious person who enjoys learning about new tech.",
  "I can't wait to see what's next!",
];

function About() {
  return (
    <div className="page" id="about">
      <h3>About</h3>
      <div className="me">
        <img src={me} alt="Brandon Wong" />
        <p>{aboutMe.join(' ')}</p>
      </div>
      <div className="container">
        <div className="experience">
          <h4>Experience</h4>
          <div className="wrap">
            <div className="work">
              <img src={trove} alt="trove logo" />
              <p>2017-Present</p>
            </div>
            <div className="work">
              <img src={seagate} alt="seagate logo" />
              <p>2015-2016</p>
            </div>
          </div>
        </div>
        <div className="education">
          <h4>Education</h4>
          <div className="school">
            <h5>The University of Texas at Austin</h5>
            <p>BS Electrical Engineering</p>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}

export default About;
