import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;

  .content {
    width: 1060px;

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

  .card-container {
    width: 100%;
  }
`;
