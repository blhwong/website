import React from 'react';

import github from '../images/github.svg';
import linkedin from '../images/linkedin.png';
import angellist from '../images/angellist.png';
import email from '../images/email.png';

const emailAddress = 'b.lh.wong@gmail.com';
const githubLink = 'github.com/blhwong';
const linkedinLink = 'linkedin.com/in/blhwong';
const angellistLink = 'angel.co/u/blhwong';

function Contact() {
  return (
    <div className="page" id="contact">
      <div className="links">
        <div>
          <a
            href={`mailto:${emailAddress}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={email} alt="email logo" />
          </a>
          <p>{emailAddress}</p>
        </div>
        <div>
          <a
            href={`https://${githubLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="" />
          </a>
          <p>{githubLink}</p>
        </div>
        <div>
          <a
            href={`https://${linkedinLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="" />
          </a>
          <p>{linkedinLink}</p>
        </div>
        <div>
          <a
            href={`https://${angellistLink}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={angellist} alt="" />
          </a>
          <p>{angellistLink}</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
