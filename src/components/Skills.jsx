import React from 'react';

import '../css/style.scss';

const skills = {
  JavaScript: 5,
  'React/Redux': 5,
  'Node/Express': 5,
  GraphQL: 5,
  'CSS/SCSS': 5,
  TDD: 5,
  'Mocha/Chai/Sinon': 5,
  SQL: 5,
  PostgresQL: 5,
  MySQL: 5,
  Git: 5,
  Webpack: 4,
  Python: 4,
  MongoDB: 4,
  Java: 3,
  Go: 3,
};

function Skills() {
  return (
    <div id="skills">
      <h4>Skills</h4>
      {Object.entries(skills).map(([skill, rating]) => (
        <div className="skill">
          <div className="name">
            {skill}
          </div>
          <div className="stars">
            {Array.from(Array(rating)).map(() => (
              <span>&#9733;</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Skills;
