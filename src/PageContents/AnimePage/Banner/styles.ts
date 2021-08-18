import styled from 'styled-components';

interface IProps {
  rating?: number;
}

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
    background-image: linear-gradient(transparent, #000);
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 25px;
    padding-bottom: 25px;

    .iframe {
      position: absolute;
      top: 50px;
      left: 30px;
    }

    .data-container {
      display: grid;
      justify-content: flex-start;
      width: 100%;
      height: 100%;
      align-content: end;
      text-align: start;
      font-family: 'Quicksand', sans-serif;
      color: #fff;

      .row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
        margin-top: 5px;
      }

      .title {
        font-size: 37px;
        font-weight: bold;
      }

      .meta {
        font-size: 20px;
      }

      .type {
        background-color: #fff;
        border-radius: 10px;
        color: gray;
        min-width: 40px;
        padding: 0 10px;
        text-align: center;
        font-size: 13px;
        font-weight: bold;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
`;

export const Rating = styled.span<IProps>`
  background-color: ${(props) => {
    if (props.rating) {
      if (props.rating <= 40) {
        return 'red';
      }
      if (props.rating >= 50 && props.rating < 70) {
        return 'yellow';
      }

      if (props.rating >= 70) {
        return 'green';
      }
    }
  }};

  min-width: 40px;
  text-align: center;
  border-radius: 5px;
  padding: 0 5px;
  margin-right: 10px;
`;
