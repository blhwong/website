import React from 'react';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.png';
import angellist from '../images/angellist.png';
import email from '../images/email.png';

function Contact() {
  return (
    <div className="page" id="contact">
      <div className="links">
        <a
          href="mailto:b.lh.wong@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={email} alt="email logo" />
        </a>
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
