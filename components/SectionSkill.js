import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const SectionSkill = ({ title, skills }) => (
  <div className="skill-container">
    <div className="title sans">{title}</div>
    <ul>
      {skills.map((skill) => (
        <li className="skill">
          <span className="skill-title">{skill.title}</span>
          {skill.bnb && (
            <span
              className="bread-and-butter"
              role="img"
              aria-label="bread and butter"
            >
              🍞🧈
            </span>
          )}
        </li>
      ))}
    </ul>
    <style jsx>
      {`
        .skill-container {
          margin-top: 50px;
        }
        .skill-container > ul {
          list-style-type: none;
          padding: 0;
        }
        .title {
          font-weight: bold;
          font-size: 24px;
          line-height: 29px;
          text-transform: uppercase;
          color: ${theme.colours.grey};
        }
        .skill {
          font-size: 18px;
          line-height: 22px;
        }
        .bread-and-butter {
          margin-left: 10px;
        }
      `}
    </style>
  </div>
);

SectionSkill.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.shape({ title: PropTypes.string, bnb: PropTypes.bool })
  ).isRequired,
};

export default SectionSkill;
