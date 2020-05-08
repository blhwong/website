import React from 'react';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.png';
import angellist from '../images/angellist.png';

function Contact() {
  return (
    <div className="page" id="contact">
      <div className="links">
        <a
          href="https://github.com/blhwong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="" />
        </a>
        <a
          href="https://linkedin.com/in/blhwong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="" />
        </a>
        <a
          href="https://angel.co/u/blhwong"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={angellist} alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
