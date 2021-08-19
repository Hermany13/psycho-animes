import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;

  .content {
    width: 80%;
    margin: 0 auto;
    padding-top: 40px;
    padding-bottom: 30px;

    .cards-container {
      padding: 40px 0;
      display: grid;
      gap: 80px;
      justify-content: center;
      grid-template-columns: auto auto auto;

      ${media.lessThan('medium')`
        grid-template-columns: auto auto;
        gap: 40px;
      `}

      ${media.lessThan('small')`
        grid-template-columns: auto;
      `}
    }
  }

  .ant-btn-primary {
    background-color: #f09;
  }
`;
