import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Project = ({ icon, link, title, info, subtitle }) => (
  <div className="project-container">
    <div className="project">
      {icon && (
        <div className="icon">
          <img src={icon} alt="project icon" />
        </div>
      )}
      <div className="title-container">
        <div className="title">{title}</div>
        {link && <a href={link}>{link}</a>}
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>
    <div className="info">{info}</div>
    <style jsx>
      {`
        .icon img {
          width: 60px;
        }
        .project-container {
          display: flex;
          flex-direction: row;
          margin: 60px 0;
          justify-content: space-between;
          min-height: 100px;
        }
        .project {
          display: flex;
          flex-direction: row;
        }
        .title-container {
          padding: 0 20px;
          font-family: ${theme.fontFamily.sansSerif};
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .title {
          font-weight: 300;
          font-size: 24px;
          line-height: 29px;
        }
        .info {
          font-size: 18px;
          line-height: 22px;
          color: ${theme.colours.grey};
          font-family: ${theme.fontFamily.sansSerif};
        }
        .subtitle {
          font-family: ${theme.fontFamily.sansSerif};
          font-style: italic;
          font-size: 24px;
          line-height: 22px;
        }
      `}
    </style>
  </div>
);

Project.defaultProps = {
  subtitle: '',
  icon: '',
  link: '',
};

Project.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  icon: PropTypes.string,
  link: PropTypes.string,
};

export default Project;
