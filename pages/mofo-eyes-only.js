import React from 'react';
import Head from 'next/head';
import globalStyles from '../styles/global';
import theme from '../styles/theme';

const MofoEyesOnly = () => (
  <div className="container">
    <Head>
      <title>For Mofo Eyes Only</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://use.typekit.net/dnx6kef.css" />
    </Head>
    <div className="contact">
      <ul>
        <li>Adam Thompson</li>
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
      <p>Hello Mofos!</p>
      <p>
        I am writing today to express my interest in the full stack developer
        role you recently{' '}
        <a href="https://www.seek.com.au/job/41320407?type=standard#searchRequestToken=fc055c8f-0b73-4a44-a401-709d15333585">
          advertised on seek
        </a>
        . Being a full stack developer with over 7 years experience I&apos;d
        like to throw my hat in the ring for consideration.
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
        out to me. Clearly the first on was having a strong gif (pronounced gif)
        game. I think I'll let that speak for itself. The other was{' '}
        <q>Making things look good is your jam</q>. I take a huge amount of
        pride and have developed a reputation amongst my peers as being someone
        who will always go the extra mile to add a bit of flair to any frontend
        work I do. I firmly believe that when something looks good, it works
        better, and good UI design is as important as good software design to
        deliver maximum value to the client.
      </p>
      <p>
        Your listed requirements closely match my experience and skill set. A
        few that I would like to highlight that would make me a great fit for
        your team:
        <ul>
          <li>
            I currently work as full stack web developer at a firm with a
            similar tech stack to what you have advertised. Specifically I have
            over 2 years of experience working with react to build complex and
            engaging web experiences for a diverse range of clients. The bulk of
            my backend experience is with Django and Python, however I believe
            there is significant crossover with the fundamental concepts, and I
            would have no issue getting up to speed with Ruby on Rails.
          </li>
          <li>
            In my time at Alliance I have worked my way up to project lead for
            one of our largest clients. The daily duties of this role include
            code reviews, sprint planning and task time estimation as well as
            feature delivery. In this short time I have developed a strong
            reputation of being someone who is flexible enough to work on a wide
            range of projects, while also having deep knowledge of core
            technologies in out stack.
          </li>
          <li>
            The bulk of my work over the last couple of years has been with REST
            APIs
          </li>
          <li>
            I have worked with GraphQL and built proof of concept integrations
            with our core tech stack.
          </li>
          <li>
            In my previous role as a systems analyst I worked heavily with SQL,
            writing complex scripts for our data warehouse solution. I consider
            myself very fortunate to have had this experience as it enabled me
            to develop a deep knowledge of SQL through hands on experience.
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
        I welcome the opportunity to discuss in person (but really it'll
        probably be zoom given the current climate{' '}
        <span role="img" aria-label="covid19">
          🦠
        </span>
        ) how my skills and strengths could be put to good use at Vinomofo.
      </p>
      <p>Sincerely,</p>
      <p>Adam Thompson</p>
    </div>
    <div className="ps">
      <p>
        PS Clearly this is what someone was looking for and I don't want to
        disappoint
      </p>
    </div>
    <div className="gif">
      <img
        src="https://media2.giphy.com/media/ZtN7ZV3Rwc4Uw/giphy.gif?cid=ecf05e4769220cf247867947f8815925ed2a9f486858d319&rid=giphy.gif"
        alt="what they were looking for"
      />
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

MofoEyesOnly.propTypes = {};

export default MofoEyesOnly;
