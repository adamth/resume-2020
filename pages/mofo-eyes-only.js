import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const MofoEyesOnly = (props) => (
  <div className="container">
    <Head>
      <title>For Mofo Eyes Only</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/dnx6kef.css" />
    </Head>
    <div className="gif">
      <img
        src="https://media3.giphy.com/media/IgGLggVL4HXYDAot0Y/giphy.gif?cid=ecf05e47d224e7b5faceaacaf28fc556d644f319945d0c94&rid=giphy.gif"
        alt="hello"
      />
    </div>
    <div>
      <p>Hello Mofos!</p>
      <p>
        I am writing today in response to the{' '}
        <a href="https://www.seek.com.au/job/41320407?type=standard#searchRequestToken=fc055c8f-0b73-4a44-a401-709d15333585">
          ad on seek
        </a>{' '}
        for a full stack developer to come and join your team. Being a full
        stack developer with over 5 years experience I&apos;d like to throw my
        hat in the ring for consideration.
      </p>
    </div>
    <style jsx>
      {`
        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .gif {
          align-self: center;
        }
      `}
    </style>
  </div>
);

MofoEyesOnly.propTypes = {};

export default MofoEyesOnly;
