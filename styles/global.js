import css from 'styled-jsx/css';
import theme from './theme';

export default css.global`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fontFamily.serif};
  }
  .sans {
    font-family: ${theme.fontFamily.sansSerif};
  }
  body {
    max-width: 760px;
    margin: auto;
    padding: 20px;
  }
  span {
    font-size: 15px;
    font-family: ${theme.fontFamily.sansSerif};
    letter-spacing: 0.04em;
    line-height: 150%;
    font-style: normal;
    font-weight: normal;
  }
  a {
    color: ${theme.colours.link};
    padding: 5px 0;
    font-family: ${theme.fontFamily.sansSerif}
  }
  a:hover {
    color: ${theme.colours.linkHover};
  }
  a:visited {
    color: ${theme.colours.linkVisited};
  }
  ul {
    font-family: ${theme.fontFamily.sansSerif}
  }
  li {
    line-height: 24px;
  }
`;
