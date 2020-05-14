import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Section = ({ title, icon, pageBreak, children }) => (
  <div className="section">
    <div className="heading">
      <img className="icon" src={icon} alt="icon" />
      {title}
    </div>
    {children}
    <style jsx>
      {`
      @media print {
        .section {
          ${pageBreak && 'page-break-after: always;'}
        }
      }
        .icon {
          position: absolute;
          z-index: -1;
          bottom: -10px;
          left: -20px;
          width: 90px;
        }
        .heading {
          margin-top: 120px;
          margin-bottom: 50px;
          font-style: italic;
          position: relative;
          font-style: italic;
          font-weight: light;
          font-size: 36px;
          line-height: 43px;
          font-family: ${theme.fontFamily.serif};
        }
        @media (max-width: 720px) {
          .heading {
            font-size: 26px;
            margin-top: 100px;
          }
          .icon {
            width: 70px;
            left: -10px;
            bottom: -5px;
          }
      `}
    </style>
  </div>
);

Section.defaultProps = {
  icon: null,
  children: null,
  pageBreak: false,
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  children: PropTypes.node,
  pageBreak: PropTypes.bool,
};

export default Section;
