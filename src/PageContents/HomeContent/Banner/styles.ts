import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  max-height: calc(100vh - 130px);
  text-align: center;
  position: relative;

  .content-hover {
    width: 100%;
    display: flex;
    max-height: calc(100vh - 130px);

    justify-content: center;

    .content {
      width: 100%;
      max-height: calc(100vh - 130px);
      background-color: #090051;

      img {
        max-height: calc(100vh - 130px);
      }
    }
  }

  .blur {
    position: absolute;
    width: 100%;
    max-height: calc(100vh - 130px);
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

      ${media.lessThan('small')`
        font-size: 2em;
      `}

      p {
        font-size: 30px;
        margin-top: -1px;
      }
    }
  }
`;
