import styled from 'styled-components';

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
    }
  }

  .card-container {
    width: 100%;
  }
`;
