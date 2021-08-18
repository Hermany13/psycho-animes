import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 249px;
  height: 331px;
  background-color: gray;
  position: relative;
  box-shadow: 2px 3px 6px gray;
  cursor: pointer;

  &:hover {
    .blur {
      max-height: 100%;
    }
  }

  .blur {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    position: absolute;
    bottom: 0;
    color: #ffffff;
    font-size: 16px;
    font-family: 'Quicksand', sans-serif;
    height: 100%;

    -webkit-transition: max-height 0.5s;
    -moz-transition: max-height 0.5s;
    -ms-transition: max-height 0.5s;
    -o-transition: max-height 0.5s;
    transition: max-height 0.5s;
    overflow: hidden;
    max-height: 80px;

    transition-delay: 150ms;
    transition-property: max-height;

    ${media.lessThan('medium')`
      transition-delay: 0ms;
    `}

    .blur-content {
      padding: 10px 10px 15px 15px;

      .title {
        margin-bottom: 0px;
        font-weight: 500;
        height: 65px;
      }

      label {
        font-size: 23px;
        font-weight: 500;
      }

      .is-offer {
        margin-left: 5px;
        text-decoration: line-through;
        color: #fff;
      }

      .parcels {
        margin-top: 8px;
      }

      .cat-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        gap: 5px;
        margin-top: 10px;

        .cat {
          font-size: 9px;
          font-weight: bold;
          color: #000;
          background-color: #fff;
          padding: 5px;
          border-radius: 10px;
          text-align: center;
          cursor: pointer;
          transition: 0.2s;

          &:hover {
            background-color: gray;
            color: #fff;
          }
        }
      }

      .text-align-container {
        display: flex;
        width: 100%;
        justify-content: center;
        padding-top: 10px;

        .description-container {
          width: 218px;
          height: 123px;
        }
      }

      .button-cart {
        background-color: #fff;
        color: #000;
        font-size: 11px;
        display: flex;
        justify-content: center;
        padding: 20px;
        border-radius: 20px;
        font-weight: bold;
        align-items: center;
        width: 160px;
        height: 27px;
        margin: 0 auto;
        cursor: pointer;
        transition: 0.2s;

        &:hover {
          background-color: gray;
          color: #fff;
        }

        a {
          display: flex;
          justify-content: center;
          width: 100%;
          align-items: center;
        }
      }
    }
  }
`;
