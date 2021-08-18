import styled from 'styled-components';
import media from 'styled-media-query';
interface IProps {
  rating?: number;
}

const ratingColorSelector = (rating: number | undefined): string => {
  if (rating) {
    if (rating <= 40) {
      return 'red';
    }
    if (rating >= 50 && rating < 70) {
      return 'yellow';
    }

    if (rating >= 70) {
      return 'green';
    }
  }
  return '';
};

export const Container = styled.section`
  width: 100%;
  max-height: calc(100vh - 130px);
  text-align: center;
  position: relative;

  ${media.lessThan('small')`
      height: 60vh;
  `}

  @media (max-width: 320px) {
    height: 80vh;
  }

  .content-hover {
    width: 100%;
    display: flex;
    max-height: calc(100vh - 130px);
    justify-content: center;

    ${media.lessThan('small')`
      height: 60vh;
    `}

    @media (max-width: 320px) {
      height: 80vh;
    }

    .content {
      width: 100%;
      max-height: calc(100vh - 130px);
      background-color: #090051;

      ${media.lessThan('small')`
        height: 60vh;
      `}

      img {
        max-height: calc(100vh - 130px);

        ${media.lessThan('small')`
          height: 60vh;
          object-fit: cover
        `}
      }

      @media (max-width: 320px) {
        height: 80vh;
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

    ${media.lessThan('small')`
        display: block;
        min-height: 100%;
        max-height: 100%;
        height: 100vh;
        padding-left: 0;
        padding-right: 0;
    `}

    .iframe {
      position: absolute;
      top: 50px;
      left: 30px;

      ${media.lessThan('medium')`
        top: 10px;
        left: 10px;
      `}

      ${media.lessThan('small')`
        top: 10px;
        left: 10px;
        position: unset;

        iframe {
          width: 100% !important;

          @media (max-width: 320px) {
            height: 35vh;
          }
        }
      `}
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

      ${media.lessThan('small')`
       padding: 0 10px;
       height: 120px;
      `}

      @media (max-width: 320px) {
        height: 40vh;
      }

      .row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 20px;
        margin-top: 5px;

        ${media.lessThan('small')`
          display: block;
        `}
      }

      .title {
        font-size: 37px;
        font-weight: bold;

        ${media.lessThan('small')`
          font-size: 1.6em
        `}
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

        ${media.lessThan('small')`
          margin-left: 0px;
        `}
      }
    }
  }
`;

export const Rating = styled.span<IProps>`
  background-color: ${(props) => ratingColorSelector(props.rating)};
  min-width: 40px;
  text-align: center;
  border-radius: 5px;
  padding: 0 5px;
  margin-right: 10px;
`;
