import React from 'react';
import PropTypes from 'prop-types';

function Intro({ children }) {
  return (
    <div className="intro">
      {children}
      <style jsx>
        {`
          .intro {
            margin: 70px 0;
          }
        `}
      </style>
    </div>
  );
}

Intro.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Intro;
