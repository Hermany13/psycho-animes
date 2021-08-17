import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-height: 100vh;
  text-align: center;
  position: relative;

  .content-hover {
    width: 100%;
    display: flex;
    max-height: 100vh;

    justify-content: center;

    .content {
      width: 100%;
      max-height: 100vh;
      background-color: #090051;

      img {
        max-height: 100vh;
      }
    }
  }

  .blur {
    position: absolute;
    width: 100%;
    max-height: 100vh;
    top: 0;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes pulsate {
      100% {
        /* Larger blur radius */
        text-shadow: 0 0 4px #fff, 0 0 11px #fff, 0 0 19px #fff, 0 0 40px #f09,
          0 0 80px #f09, 0 0 90px #f09, 0 0 100px #f09, 0 0 150px #f09;
      }
      0% {
        /* A slightly smaller blur radius */
        text-shadow: 0 0 4px #fff, 0 0 10px #fff, 0 0 18px #fff, 0 0 38px #f09,
          0 0 73px #f09, 0 0 80px #f09, 0 0 94px #f09, 0 0 140px #f09;
      }
    }

    .title-container {
      color: #fff;
      animation: pulsate 0.11s ease-in-out infinite alternate;
      font-size: 60px;
      font-family: 'Quicksand', sans-serif;

      p {
        font-size: 30px;
        margin-top: -1px;
      }
    }
  }
`;
