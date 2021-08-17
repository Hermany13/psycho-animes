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

    .title-container {
      color: #fff;
      font-size: 60px;
      font-family: 'Quicksand', sans-serif;

      p {
        font-size: 30px;
        margin-top: -1px;
      }
    }
  }
`;
