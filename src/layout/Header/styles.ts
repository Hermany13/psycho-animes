import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.header`
  width: 100%;
  height: 130px;
  background-color: #000;
  padding: 0.4em;
  display: flex;
  align-items: center;

  @keyframes pulsate {
    100% {
      text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09,
        0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09;
    }
    0% {
      text-shadow: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #f09,
        0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;
    }
  }

  .neonText {
    animation: pulsate 0.11s ease-in-out infinite alternate;
    color: #fff;
  }

  a {
    font-size: 50px;
    padding: 0 30px;
    font-family: 'Sacramento', sans-serif;

    ${media.lessThan('small')`
        font-size: 2em;
    `}
  }
`;
