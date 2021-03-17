import React from 'react';
import Head from 'next/head';
import globalStyles from '../styles/global';
import theme from '../styles/theme';
import { yearsOfExperience } from '../lib/uitl';

const JBEyesOnly = () => (
  <div className="container">
    <Head>
      <title>For JB Hi-Fi Eyes Only</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/dnx6kef.css" />
    </Head>
    <div className="contact">
      <ul>
        <li>Adam Thompson</li>
        <li>
          <a href="adamth.com">adamth.com</a>
        </li>
        <li>
          <a href="mailto:adam@adamth.com">adam@adamth.com</a>
        </li>
        <li>
          <a href="tel:048804282">0428 804 282</a>
        </li>
      </ul>
    </div>
    <div className="gif">
      <img
        src="https://media3.giphy.com/media/IgGLggVL4HXYDAot0Y/giphy.gif?cid=ecf05e47d224e7b5faceaacaf28fc556d644f319945d0c94&rid=giphy.gif"
        alt="hello"
      />
    </div>
    <div>
      <p>Hello JB Hi-Fi!</p>
      <p>
        I am writing today to express my interest in the senior front end
        developer role you recently{' '}
        <a href="https://careers.jbhifi.com.au/cw/en/job/494787/senior-front-end-software-developer">
          advertised on your website
        </a>
        . Being a full stack developer with over {yearsOfExperience} years
        experience I&apos;d like to throw my hat in the ring for consideration.
      </p>
    </div>
    <div className="gif">
      <img
        src="https://media1.giphy.com/media/gh6gFVh35jyzNvHegl/giphy.gif?cid=ecf05e47db1b15f1fe38819bd6690ed80b1dca32b871d17d&rid=giphy.gif"
        alt="expand on that"
      />
    </div>
    <div>
      <p>
        Sure! There were a couple of things in the ad that specifically stood
        out to me. I have a <q>strong working knowledge of ReactJS</q>, having
        spent the majority of my career working directly with these tools.
        Second, I absolutely love <q>mentoring and coaching team members</q>{' '}
        where appropriate. Over the last 18 months I've been enjoying stepping
        up into more of a leadership role and I'm now seeking an opportunity to
        use my unique skillset to help a team achieve the best we can. And
        finally, <q>attitude and aptitude are more important</q> is something I
        completely agree with. Every day I do my best to not only bring
        technical excellence to my work, but also a sense of fun and energy, and
        I love working with others who do the same.
      </p>
      <p>
        Your listed requirements closely match my experience and skill set. A
        few that I would like to highlight that would make me a great fit for
        your team:
        <ul>
          <li>
            I currently work as a full stack developer at a well known online
            retailer. I have experience in delivering scalable solutions in a
            highly demanding and cutting edge industry.
          </li>
          <li>
            I have experience working as a project lead on large, complex
            projects. I have been focusing recently on further developing my
            leadership skills to enable all members of the team to achieve their
            best.
          </li>
          <li>
            The bulk of my work over the last couple of years has been with REST
            APIs and ReactJS, and I love it.
          </li>
        </ul>
      </p>
    </div>
    <div className="gif">
      <img
        src="https://media3.giphy.com/media/Ai6jGrjxJAp4Y8vVeF/giphy.gif?cid=ecf05e47b4261acf9d3de08e7860ae0be7a6d9d67fbaac5b&rid=giphy.gif"
        alt="click this link"
      />
    </div>
    <div>
      <p>
        If you'd like to learn a little more about my work history and check out
        some of the projects I've worked on,{' '}
        <a href="/">my resume is available here.</a>
      </p>
      <p>
        I welcome the opportunity to discuss in person how my skills and
        strengths could be put to good use at JB Hi-Fi.
      </p>
      <p>Sincerely,</p>
      <p>Adam Thompson</p>
    </div>
    <style jsx global>
      {globalStyles}
    </style>
    <style jsx>
      {`
        .contact ul {
          list-style-type: none;
          padding: 0;
        }

        q {
          font-family: ${theme.fontFamily.serif};
          font-style: italic;
        }

        .container {
          display: flex;
          flex-direction: column;
          width: 100%;
          font-family: ${theme.fontFamily.sansSerif};
          line-height: 22px;
        }

        .gif {
          align-self: center;
        }

        img {
          width: 320px;
          height: auto;
        }

        .ps {
          margin-top: 200px;
        }
      `}
    </style>
  </div>
);

JBEyesOnly.propTypes = {};

export default JBEyesOnly;
