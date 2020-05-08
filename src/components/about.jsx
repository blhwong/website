import React from 'react';

import trove from '../images/trove.png';
import seagate from '../images/seagate.jpg';

function About() {
  return (
    <div className="page" id="about">
      <h3>About</h3>
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
    </div>
  );
}

export default About;
