import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Project = ({ icon, link, title, info, subtitle }) => (
  <div className="project">
    {icon && (
      <div className="icon">
        <img src={icon} alt="project icon" />
      </div>
    )}
    <div className="project-content">
      <div className="heading-container">
        <div className="title">{title}</div>
        <div className="info">{info}</div>
      </div>
      <div>
        {link && <a href={link}>{link}</a>}
        <div className="subtitle">{subtitle}</div>
      </div>
    </div>

    <style jsx>
      {`
        .icon img {
          width: 60px;
        }
        .project {
          display: flex;
          flex-direction: row;
          margin-top: 20px;
          margin-bottom: 60px;
        }
        .project-content {
          width: 100%;
          padding-left: 20px;
        }
        .heading-container {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          font-family: ${theme.fontFamily.sansSerif};
        }
        .title {
          font-weight: 300;
          font-size: 24px;
          line-height: 29px;
          margin-bottom: 10px;
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
          margin-top: 10px;
        }
        @media (max-width: 720px) {
          .icon img {
            width: 40px;
          }
          .title {
            font-size: 18px;
          }
          .subtitle {
            font-size: 14px;
          }
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
