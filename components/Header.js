import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

const Header = ({ name, subheading, email, phone }) => (
  <div className="header">
    <div>
      <h1 className="name">{name}</h1>
      <span className="sans subheading">{subheading}</span>
    </div>
    <div className="contact sans">
      <a href={`mailto:${email}`}>{email}</a>
      <a href={`tel:${phone}`}>{phone}</a>
    </div>
    <style jsx>
      {`
        .header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }
        .name {
          font-style: normal;
          font-weight: normal;
          font-size: 58px;
          line-height: 67px;
          position: relative;
        }
        .name:after {
          content: '';
          position: absolute;
          top: 45%;
          left: 5%;
          width: 100%;
          height: 65%;
          background: ${theme.colours.yellow};
          z-index: -1;
        }
        .subheading {
          font-style: normal;
          font-weight: 300;
          font-size: 29px;
          line-height: 34px;
          text-transform: uppercase;
          color: ${theme.colours.grey};
        }
        .contact {
          align-self: center;
          display: flex;
          flex-direction: column;
          font-style: normal;
          font-weight: normal;
          font-size: 15px;
          text-align: right;
        }
        @media (max-width: 720px) {
          .header {
            flex-direction: column;
          }
          .name {
            font-size: 44px;
            line-height: 50px;
          }
          .name:after {
            width: 90%;
          }
          .contact {
            margin-top: 20px;
            align-self: flex-start;
            text-align: left;
          }
        }
      `}
    </style>
  </div>
);

Header.propTypes = {
  name: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Header;
