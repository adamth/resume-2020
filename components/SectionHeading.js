import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const SectionHeading = ({ title, info, subtitle }) => (
  <div className="section-heading">
    <div className="title-container">
      <div className="title">{title}</div>
      <div className="info">{info}</div>
    </div>
    {subtitle && <div className="subtitle">{subtitle}</div>}
    <style jsx>
      {`
        .section-heading {
          margin-top: 60px;
          margin-bottom: 40px;
        }
        .title-container {
          font-family: ${theme.fontFamily.sansSerif};
          display: flex;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        .title {
          font-size: 24px;
          line-height: 29px;
          font-weight: bold;
          text-transform: uppercase;
        }
        .info {
          font-size: 18px;
          line-height: 22px;
          color: ${theme.colours.grey};
        }
        .subtitle {
          font-family: ${theme.fontFamily.sansSerif};
          font-style: italic;
          font-size: 18px;
          line-height: 22px;
          color: ${theme.colours.grey};
        }
      `}
    </style>
  </div>
);

SectionHeading.defaultProps = {
  subtitle: '',
};

SectionHeading.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};

export default SectionHeading;
